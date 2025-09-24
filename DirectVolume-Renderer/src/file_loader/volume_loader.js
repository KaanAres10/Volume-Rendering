import * as nifti from 'nifti-reader-js';
import JSZip from 'jszip';
import pako from 'pako';
import { parse as parseNRRD } from 'nrrd-js';
import daikon from 'daikon';

// -------------------------
// Helpers
// -------------------------

function ext(name='') {
    const m = name.toLowerCase().match(/\.([^.]+)$/);
    return m ? m[1] : '';
}

function isGz(name='') {
    return name.toLowerCase().endsWith('.gz');
}

function readAsArrayBuffer(file) {
    return new Promise((res, rej) => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = rej;
        fr.readAsArrayBuffer(file);
    });
}

function findFileByName(fileList, name) {
    const lower = name.toLowerCase();
    return [...fileList].find(f => f.name.toLowerCase().endsWith(lower));
}

function toUint8(dataTyped) {
    // normalize to [0..255]
    let min = +Infinity, max = -Infinity;
    const len = dataTyped.length;
    for (let i=0;i<len;i++) {
        const v = dataTyped[i];
        if (v < min) min = v;
        if (v > max) max = v;
    }
    const range = (max - min) || 1;
    const out = new Uint8Array(len);
    for (let i=0;i<len;i++) {
        out[i] = Math.round(255 * (dataTyped[i] - min) / range);
    }
    return { data: out, min, max };
}

// -------------------------
// NIfTI (.nii / .nii.gz)
// -------------------------
export async function loadNifti(file) {
    const ab = await readAsArrayBuffer(file);
    const buf = isGz(file.name) ? pako.ungzip(new Uint8Array(ab)).buffer : ab;

    if (!nifti.isNIFTI(buf)) throw new Error('Not a valid NIFTI file');
    const header = nifti.readHeader(buf);
    const image  = nifti.readImage(header, buf);

    const dtypeMap = {
        2: Uint8Array,    // uint8
        4: Int16Array,
        8: Int32Array,
        16: Float32Array, // float32
        64: Float64Array,
        512: Uint16Array,
        768: Uint32Array
    };
    const Typed = dtypeMap[header.datatypeCode] || Uint8Array;
    const typed = new Typed(image);

    const dims = { x: header.dims[1], y: header.dims[2], z: header.dims[3] };
    const spacing = [header.pixDims[1]||1, header.pixDims[2]||1, header.pixDims[3]||1];

    const { data } = Typed === Uint8Array ? { data: typed } : toUint8(typed);

    return {
        name: file.name,
        data,
        dims,
        spacing,
        dataType: Typed.name.toLowerCase(),
        meta: { header }
    };
}

// -------------------------
// NRRD (.nrrd / .nhdr)
// -------------------------
async function loadNRRD(file) {
    const ab = await readAsArrayBuffer(file);
    const parsed = parseNRRD(ab); // returns { data, sizes, spaceDirections, type, ... }

    // sizes => [x,y,z] possibly more axes; we’ll take first three
    const [x,y,z] = parsed.sizes.length >= 3 ? parsed.sizes.slice(0,3) : [parsed.sizes[0], parsed.sizes[1]||1, parsed.sizes[2]||1];
    const dims = { x, y, z };

    // spacing from spaceDirections if available
    let spacing = [1,1,1];
    if (parsed.spaceDirections) {
        spacing = parsed.spaceDirections.slice(0,3).map(v => (Array.isArray(v) ? Math.hypot(...v) : (typeof v === 'number' ? Math.abs(v) : 1)));
    }

    const typed = parsed.data;
    const needNormalize = !(typed instanceof Uint8Array);
    const { data } = needNormalize ? toUint8(typed) : { data: typed };

    return {
        name: file.name,
        data,
        dims,
        spacing,
        dataType: (typed.constructor && typed.constructor.name) ? typed.constructor.name.toLowerCase() : 'unknown',
        meta: parsed
    };
}

// -------------------------
// MetaImage (.mha/.mhd + .raw)
// -------------------------
async function loadMetaImage(file, allFiles) {
    const txt = new TextDecoder().decode(await readAsArrayBuffer(file));
    const lines = txt.split(/\r?\n/);

    const kv = {};
    for (const ln of lines) {
        const m = ln.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.+)\s*$/);
        if (m) kv[m[1]] = m[2];
    }

    const sizes = (kv.DimSize || kv.Dimensions || '').split(/\s+/).map(Number);
    if (sizes.length < 3) throw new Error('MetaImage missing DimSize');

    const dims = { x: sizes[0], y: sizes[1], z: sizes[2] };
    const spacing = (kv.ElementSpacing || kv.ElementSize || '1 1 1').split(/\s+/).map(Number).slice(0,3);

    const typeMap = {
        'MET_UCHAR': Uint8Array,
        'MET_CHAR': Int8Array,
        'MET_USHORT': Uint16Array,
        'MET_SHORT': Int16Array,
        'MET_UINT': Uint32Array,
        'MET_INT': Int32Array,
        'MET_FLOAT': Float32Array,
        'MET_DOUBLE': Float64Array
    };
    const Typed = typeMap[kv.ElementType] || Uint8Array;

    // data file
    let rawBuf;
    if (kv.ElementDataFile && kv.ElementDataFile !== 'LOCAL') {
        // paired .raw path relative to .mhd
        const raw = findFileByName(allFiles, kv.ElementDataFile);
        if (!raw) throw new Error(`Missing raw file: ${kv.ElementDataFile}`);
        rawBuf = await readAsArrayBuffer(raw);
    } else {
        // .mha with embedded data after header? (rare in-browser)
        // Minimal support: find the first blank line and read after—often not present; throw if not found.
        throw new Error('Embedded data in .mha not supported in this simple loader');
    }

    const typed = new Typed(rawBuf);
    const needNormalize = !(typed instanceof Uint8Array);
    const { data } = needNormalize ? toUint8(typed) : { data: typed };

    return {
        name: file.name,
        data,
        dims,
        spacing,
        dataType: Typed.name.toLowerCase(),
        meta: kv
    };
}

// -------------------------
// DICOM series (multiple .dcm)
// -------------------------
async function loadDICOM(files) {
    // Collect daikon Image objects for one series, sorted by InstanceNumber
    const buffers = await Promise.all([...files].map(f => readAsArrayBuffer(f)));
    const images = [];
    for (const ab of buffers) {
        const data = new DataView(ab);
        if (!daikon.Utils.isValidDICOM(data)) continue;
        const image = daikon.Series.parseImage(data);
        if (image) images.push(image);
    }
    if (!images.length) throw new Error('No valid DICOM images found');

    // group by SeriesInstanceUID
    const bySeries = new Map();
    for (const img of images) {
        const uid = img.getSeriesInstanceUID() || 'series';
        if (!bySeries.has(uid)) bySeries.set(uid, []);
        bySeries.get(uid).push(img);
    }
    // pick largest series
    let series = [...bySeries.values()].sort((a,b)=>b.length-a.length)[0];
    series.sort((a,b)=>(a.getImageNumber()||0)-(b.getImageNumber()||0));

    const width  = series[0].getCols();
    const height = series[0].getRows();
    const depth  = series.length;

    const sx = series[0].getPixelSpacing()[0] || 1;
    const sy = series[0].getPixelSpacing()[1] || 1;
    const sz = Math.abs(series[0].getSliceThickness() || 1);
    const dims = { x: width, y: height, z: depth };
    const spacing = [sx, sy, sz];

    // assemble volume
    // Note: daikon returns Int16Array or Uint16Array typically
    const firstTyped = series[0].getInterpretedData(true, true, true); // rescale slope/intercept applied
    const Typed = firstTyped.constructor;
    const slab = new Typed(width * height * depth);

    for (let z=0; z<depth; z++) {
        const vox = series[z].getInterpretedData(true, true, true);
        if (!(vox instanceof Typed)) {
            // cast per-slice if needed
            const tmp = new Typed(vox.length);
            for (let i=0;i<vox.length;i++) tmp[i] = vox[i];
            vox.set(tmp);
        }
        slab.set(vox, z * width * height);
    }

    const needNormalize = !(slab instanceof Uint8Array);
    const { data } = needNormalize ? toUint8(slab) : { data: slab };

    return {
        name: `${files[0].webkitRelativePath?.split('/')[0] || 'dicom-series'}`,
        data,
        dims,
        spacing,
        dataType: Typed.name.toLowerCase(),
        meta: { count: files.length }
    };
}

// -------------------------
// ZIP bundle (meta.json + volume.raw)
// meta.json: { dims:[x,y,z], spacing:[sx,sy,sz], type:"uint16"/"float32"/... , file:"volume.raw" }
// -------------------------
async function loadZip(file) {
    const ab = await readAsArrayBuffer(file);
    const zip = await JSZip.loadAsync(ab);

    const metaEntry = Object.values(zip.files).find(f => f.name.toLowerCase().endsWith('meta.json'));
    if (!metaEntry) throw new Error('zip: missing meta.json');

    const meta = JSON.parse(await metaEntry.async('string'));
    const rawEntry = zip.file(meta.file || 'volume.raw');
    if (!rawEntry) throw new Error(`zip: missing ${meta.file}`);

    const rawBuf = await rawEntry.async('arraybuffer');

    const typemap = {
        'uint8': Uint8Array,
        'int8': Int8Array,
        'uint16': Uint16Array,
        'int16': Int16Array,
        'uint32': Uint32Array,
        'int32': Int32Array,
        'float32': Float32Array,
        'float64': Float64Array
    };
    const Typed = typemap[(meta.type||'uint8').toLowerCase()] || Uint8Array;

    const typed = new Typed(rawBuf);
    const needNormalize = !(typed instanceof Uint8Array);
    const { data } = needNormalize ? toUint8(typed) : { data: typed };

    const [x,y,z] = meta.dims || [];
    const dims = { x, y, z };
    const spacing = meta.spacing || [1,1,1];

    return {
        name: file.name,
        data,
        dims,
        spacing,
        dataType: (meta.type||'uint8'),
        meta
    };
}

// -------------------------
// Public entry: loadVolumeFromFiles
// Accepts FileList from <input multiple webkitdirectory> or a single file
// -------------------------
export async function loadVolumeFromFiles(fileList) {
    const files = [...fileList];
    if (!files.length) throw new Error('No files selected');

    // If a directory was dropped/selected, look at all; otherwise single
    // Prefer by extension. If multiple, check for DICOM folder.
    if (files.length > 1) {
        // try DICOM series (most .dcm or no extension but DICOM magic)
        const dicoms = files.filter(f => ['dcm','dicom'].includes(ext(f.name)) || !ext(f.name));
        if (dicoms.length >= Math.max(8, files.length * 0.5)) {
            return await loadDICOM(dicoms);
        }

        // MHD+RAW pair
        const mhd = files.find(f => ext(f.name) === 'mhd');
        if (mhd) return await loadMetaImage(mhd, files);
    }

    // single file formats
    const f = files[0];
    const e = ext(f.name)


    if (e === 'raw' || (e === 'gz' && f.name.toLowerCase().endsWith('.raw.gz'))) {
        return await loadRAW(f, files);
    }

    if (e === 'nii' || (e === 'gz' && f.name.toLowerCase().endsWith('.nii.gz'))) {
        return await loadNifti(f);
    }
    if (e === 'nrrd' || e === 'nhdr') {
        return await loadNRRD(f);
    }
    if (e === 'mha' || e === 'mhd') {
        return await loadMetaImage(f, files);
    }
    if (e === 'zip') {
        return await loadZip(f);
    }
    if (e === 'pvm' || (e === 'gz' && f.name.toLowerCase().endsWith('.pvm.gz'))) {
        return await loadPVM(f);
    }
    if (e === 'vol' || (e === 'gz' && f.name.toLowerCase().endsWith('.vol.gz'))) {
        return await loadVOL(f);
    }


    throw new Error(`Unsupported file(s): ${files.map(f=>f.name).join(', ')}`);
}
export async function loadPVM(file) {
    const ab = await readAsArrayBuffer(file);
    let u8 = new Uint8Array(ab);

    // 0) decompress if: (a) filename says .gz OR (b) magic is gzip (1F 8B)
    if (isGz(file.name) || (u8.length >= 2 && u8[0] === 0x1f && u8[1] === 0x8b)) {
        try { u8 = pako.ungzip(u8); } catch (e) { /* fall through */ }
    }

    const dec = new TextDecoder();

    // Helper: strip UTF-8 BOM and leading whitespace/newlines
    function stripBOMAndWS(arr) {
        let off = 0;
        if (arr.length >= 3 && arr[0] === 0xEF && arr[1] === 0xBB && arr[2] === 0xBF) off = 3;
        // skip whitespace/newlines
        while (off < arr.length) {
            const b = arr[off];
            if (b === 9 || b === 10 || b === 13 || b === 32) { off++; } else break;
        }
        return arr.subarray(off);
    }

    // ---------- Path A: binary V³ flavor ("PVM" + \n or \0 at start) ----------
    {
        const s = stripBOMAndWS(u8);
        if (s.length >= 4 && s[0] === 0x50 && s[1] === 0x56 && s[2] === 0x4D && (s[3] === 0x0A || s[3] === 0x00)) {
            // ... (keep your existing binary parser, but read from `s` instead of `u8`)
            let off = 4;
            const dv = new DataView(s.buffer, s.byteOffset);
            const need = (bytes) => { if (off + bytes > s.byteLength) throw new Error('PVM: unexpected EOF'); };

            need(4*4 + 4*3);
            const x = dv.getUint32(off, true); off += 4;
            const y = dv.getUint32(off, true); off += 4;
            const z = dv.getUint32(off, true); off += 4;
            const bpc = dv.getUint32(off, true); off += 4;
            const sx  = dv.getFloat32(off, true); off += 4;
            const sy  = dv.getFloat32(off, true); off += 4;
            const sz  = dv.getFloat32(off, true); off += 4;

            // Optional text blocks (same as your code)
            const maybeData = s.subarray(off, off + 2);
            const looksGz = (maybeData.length >= 2 && maybeData[0] === 0x1f && maybeData[1] === 0x8b);
            if (!looksGz) {
                const SKIP = 256 + 256 + 256 + 1024;
                if (off + SKIP <= s.length) off += SKIP;
            }

            let payload = s.subarray(off);
            if (payload.length >= 2 && payload[0] === 0x1f && payload[1] === 0x8b) {
                payload = pako.ungzip(payload);
            }

            const bytesPerSample = Math.ceil(bpc / 8);
            const count = x * y * z;
            const needed = count * bytesPerSample;
            if (payload.length < needed) {
                throw new Error(`PVM: payload too small (${payload.length} < ${needed}) for ${x}x${y}x${z}@${bpc}bpp`);
            }

            let out;
            if (bytesPerSample === 1) {
                out = payload.subarray(0, count);
            } else if (bytesPerSample === 2) {
                const view = new DataView(payload.buffer, payload.byteOffset, needed);
                const u16  = new Uint16Array(count);
                for (let i=0, b=0; i<count; i++, b+=2) u16[i] = view.getUint16(b, true);
                out = toUint8(u16).data;
            } else if (bytesPerSample === 4 && bpc === 32) {
                const view = new DataView(payload.buffer, payload.byteOffset, needed);
                const f32  = new Float32Array(count);
                for (let i=0, b=0; i<count; i++, b+=4) f32[i] = view.getFloat32(b, true);
                out = toUint8(f32).data;
            } else {
                const stride = bytesPerSample;
                out = new Uint8Array(count);
                for (let i=0, j=0; i<count; i++, j+=stride) out[i] = payload[j];
            }

            return {
                name: file.name,
                data: out,
                dims: { x, y, z },
                spacing: [sx||1, sy||1, sz||1],
                dataType: 'uint8',
                meta: { format: 'pvm', bpc }
            };
        }
    }

    // ---------- Path B: ASCII header (more lenient) ----------
    {
        // Look for "PVM" (case-insensitive) within the first 64 bytes after BOM/whitespace
        const s = stripBOMAndWS(u8);
        const scanLen = Math.min(256, s.length);
        const headStr = dec.decode(s.subarray(0, scanLen));

        // find line that contains PVM token
        const hasPVMToken = /(^|\s)PVM(\s|$)/i.test(headStr);
        if (hasPVMToken) {
            // consume first line (may be just "PVM" or "PVM <version>" etc.)
            let off = 0;
            while (off < s.length && s[off] !== 10 && s[off] !== 13) off++;
            while (off < s.length && (s[off] === 10 || s[off] === 13)) off++;

            const lines = [];
            // read header lines until blank line
            while (off < s.length) {
                let eol = off;
                while (eol < s.length && s[eol] !== 10 && s[eol] !== 13) eol++;
                const line = dec.decode(s.subarray(off, eol)).trim();
                while (eol < s.length && (s[eol] === 10 || s[eol] === 13)) eol++;
                off = eol;
                if (!line.length) break; // blank line -> end header
                lines.push(line);
                if (lines.length > 512) break;
            }

            const kv = {};
            for (const ln of lines) {
                const m = ln.match(/^\s*([^:=]+)\s*[:=]\s*(.+?)\s*$/);
                if (m) kv[m[1].toLowerCase()] = m[2];
            }

            const sizeStr =
                kv['size'] || kv['dimensions'] || kv['dimsize'] || kv['dims'] || kv['dim'] || kv['volume size'] || kv['volumesize'];
            if (!sizeStr) throw new Error('PVM: missing Size/Dimensions in header');

            const dimsArr = String(sizeStr).split(/[\s,;x]+/).map(Number).filter(Number.isFinite);
            if (dimsArr.length < 3) throw new Error(`PVM: invalid Size "${sizeStr}"`);
            const dims = { x: dimsArr[0], y: dimsArr[1], z: dimsArr[2] };

            let spacing = [1,1,1];
            const spacingStr = kv['spacing'] || kv['scale'] || kv['voxelsize'] || kv['voxel size'] || kv['resolution'];
            if (spacingStr) {
                const sp = String(spacingStr).split(/[\s,;x]+/).map(Number).filter(Number.isFinite);
                if (sp.length >= 3) spacing = [sp[0], sp[1], sp[2]];
            }

            // payload after header; may itself be gz
            let payload = s.subarray(off);
            if (payload.length >= 2 && payload[0] === 0x1f && payload[1] === 0x8b) {
                payload = pako.ungzip(payload);
            }

            const count = dims.x * dims.y * dims.z;
            if (payload.byteLength < count) {
                throw new Error(`PVM: payload too small (${payload.byteLength} < ${count})`);
            }

            return {
                name: file.name,
                data: payload.subarray(0, count),
                dims,
                spacing,
                dataType: 'uint8',
                meta: { format: 'pvm-ascii' }
            };
        }
    }

    // ---------- If we got here, it still doesn't look like PVM ----------
    // Provide helpful diagnostics
    const previewBytes = Array.from(u8.subarray(0, 32))
        .map(b => b.toString(16).padStart(2, '0')).join(' ');
    const asciiPreview = dec.decode(u8.subarray(0, 64)).replace(/[^\x20-\x7E]+/g, '.');

    throw new Error(
        `PVM: unrecognized header. First bytes: [${previewBytes}] | ASCII: "${asciiPreview}". ` +
        `If this file is gzipped, make sure it's not double-gzipped; otherwise it may not be a PVM.`
    );
}

async function loadVOL(file) {
    // read + decompress if needed
    const ab = await readAsArrayBuffer(file);
    let u8 = new Uint8Array(ab);
    if (isGz(file.name)) {
        u8 = pako.ungzip(u8);
    }

    const dec = new TextDecoder();
    const HEAD_SCAN = Math.min(4096, u8.length);
    const headStr = dec.decode(u8.subarray(0, HEAD_SCAN));

    // ---------- Path A: ASCII header (.vol with text header + blank line) ----------
    const looksAscii = (s) => {
        const nonPrintableRatio = s.replace(/[\x09\x0A\x0D\x20-\x7E]/g, '').length / s.length;
        const hasKVs = /[:=]/.test(s) && /[\r\n]{2}/.test(s); // detect "key: value" and a blank line
        return nonPrintableRatio < 0.1 && hasKVs;
    };

    if (looksAscii(headStr)) {
        // Parse header lines until blank line
        let off = 0;
        const lines = [];
        while (off < u8.length) {
            let eol = off;
            while (eol < u8.length && u8[eol] !== 10 && u8[eol] !== 13) eol++;
            const line = dec.decode(u8.subarray(off, eol)).trim();
            while (eol < u8.length && (u8[eol] === 10 || u8[eol] === 13)) eol++;
            off = eol;

            if (!line.length) break; // blank line
            lines.push(line);
            if (lines.length > 512) break; // safety
        }

        const kv = {};
        for (const ln of lines) {
            const m = ln.match(/^\s*([^:=]+)\s*[:=]\s*(.+?)\s*$/);
            if (m) kv[m[1].toLowerCase()] = m[2];
        }

        const sizeStr =
            kv['dimsize'] || kv['dims'] || kv['dim'] || kv['size'] ||
            kv['dimensions'] || kv['volumesize'] || kv['volume size'];
        if (!sizeStr) throw new Error('VOL: missing dimension info (DimSize/Size/Dimensions/VolumeSize)');
        const dimNums = ('' + sizeStr).split(/[\s,;x]+/i).map(Number).filter(Number.isFinite);
        if (dimNums.length < 3) throw new Error(`VOL: invalid dimensions "${sizeStr}"`);
        const dims = { x: dimNums[0], y: dimNums[1], z: dimNums[2] };

        let spacing = [1,1,1];
        const spStr = kv['elementspacing'] || kv['spacing'] || kv['voxelsize'] || kv['voxel size'] || kv['resolution'];
        if (spStr) {
            const sp = ('' + spStr).split(/[\s,;x]+/i).map(Number).filter(Number.isFinite);
            if (sp.length >= 3) spacing = [sp[0], sp[1], sp[2]];
        }

        // Payload after header (may itself be gzipped)
        let payload = u8.subarray(off);
        if (payload.length >= 2 && payload[0] === 0x1f && payload[1] === 0x8b) {
            payload = pako.ungzip(payload);
        }

        const count = dims.x * dims.y * dims.z;
        if (payload.byteLength < count) {
            throw new Error(`VOL: payload too small (${payload.byteLength} < ${count})`);
        }

        return {
            name: file.name,
            data: payload.subarray(0, count),    // already uint8
            dims,
            spacing,
            dataType: 'uint8',
            meta: { format: 'vol-ascii' }
        };
    }

    // ---------- Path B: VolVis/Stanford binary header (.vol) ----------
    // Layout (all big-endian):
    // int32 numX, int32 numY, int32 numZ,
    // int32 border (unused),
    // float32 sizeX, float32 sizeY, float32 sizeZ,
    // then numX*numY*numZ bytes (unsigned char)
    if (u8.byteLength >= 28) {
        const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
        let off = 0;
        // read big-endian
        const numX = dv.getInt32(off, false); off += 4;
        const numY = dv.getInt32(off, false); off += 4;
        const numZ = dv.getInt32(off, false); off += 4;
        const border = dv.getInt32(off, false); off += 4; // often 0
        const sizeX = dv.getFloat32(off, false); off += 4;
        const sizeY = dv.getFloat32(off, false); off += 4;
        const sizeZ = dv.getFloat32(off, false); off += 4;

        const validDims =
            Number.isFinite(numX) && Number.isFinite(numY) && Number.isFinite(numZ) &&
            numX > 0 && numY > 0 && numZ > 0 && numX <= 8192 && numY <= 8192 && numZ <= 8192;

        if (validDims) {
            const count = numX * numY * numZ;
            const remaining = u8.byteLength - off;

            // Heuristic check: remaining should be at least count bytes
            if (remaining >= count && count > 0) {
                // spacing from "true size" / resolution; fall back to 1 if non-finite
                const sx = Number.isFinite(sizeX) && sizeX > 0 ? sizeX / numX : 1;
                const sy = Number.isFinite(sizeY) && sizeY > 0 ? sizeY / numY : 1;
                const sz = Number.isFinite(sizeZ) && sizeZ > 0 ? sizeZ / numZ : 1;

                const payload = u8.subarray(off, off + count); // uchar voxels
                return {
                    name: file.name,
                    data: payload, // already Uint8Array
                    dims: { x: numX, y: numY, z: numZ },
                    spacing: [sx, sy, sz],
                    dataType: 'uint8',
                    meta: { format: 'volvis-binary', border }
                };
            }
        }
    }

    // If neither path matched, we don’t guess blindly.
    throw new Error('VOL: not ASCII and not recognized as VolVis binary. If this is raw voxels, please provide dims/type.');
}

// -------------------------
// Plain RAW (.raw / .raw.gz)
// Sidecar priority (same basename):
//   .json (e.g. { "dims":[x,y,z], "spacing":[sx,sy,sz], "type":"uint8" })
//   .mhd  (MetaImage header pointing to data file; we reuse your .mhd parser)
//   .txt / .ini (key=value lines: DimSize= x y z, ElementSpacing=..., Type=uint8)
// If no sidecar -> try to infer dims from byte length (power-of-two cubes).
// -------------------------
async function loadRAW(file, allFiles) {
    // 1) read and decompress if needed
    const ab0 = await readAsArrayBuffer(file);
    let u8 = new Uint8Array(ab0);
    if (isGz(file.name)) u8 = pako.ungzip(u8);

    // helpers
    const base = file.name.replace(/\.gz$/i, '').replace(/\.[^.]+$/,''); // strip .gz and .raw
    const findSidecar = (exts) => {
        for (const e of exts) {
            const f = findFileByName(allFiles, `${base}.${e}`);
            if (f) return f;
        }
        return null;
    };

    // 2) sidecar: JSON
    let dims, spacing = [1,1,1], dtype = 'uint8';

    const jsonSidecar = findSidecar(['json','meta.json']);
    if (jsonSidecar) {
        const meta = JSON.parse(new TextDecoder().decode(await readAsArrayBuffer(jsonSidecar)));
        if (meta.dims?.length >= 3) dims = { x: meta.dims[0], y: meta.dims[1], z: meta.dims[2] };
        if (Array.isArray(meta.spacing) && meta.spacing.length >= 3) spacing = meta.spacing.slice(0,3);
        if (meta.type) dtype = String(meta.type).toLowerCase();
    } else {
        // 3) sidecar: MHD (reuse your MetaImage parser by synthesizing a tiny FileList)
        const mhdSidecar = findSidecar(['mhd']);
        if (mhdSidecar) {
            // pretend we loaded via .mhd, but override raw buffer with our u8
            const meta = await loadMetaImage(mhdSidecar, allFiles);
            return {
                name: file.name,
                data: meta.data, // loadMetaImage already normalized to uint8
                dims: meta.dims,
                spacing: meta.spacing,
                dataType: meta.dataType,
                meta: { ...meta.meta, from: 'raw+mhd' }
            };
        }

        // 4) sidecar: TXT/INI (key=value or key: value)
        const txtSidecar = findSidecar(['txt','ini']);
        if (txtSidecar) {
            const txt = new TextDecoder().decode(await readAsArrayBuffer(txtSidecar));
            const kv = {};
            for (const ln of txt.split(/\r?\n/)) {
                const m = ln.match(/^\s*([^:=]+)\s*[:=]\s*(.+?)\s*$/);
                if (m) kv[m[1].toLowerCase()] = m[2];
            }
            const sizeStr = kv['dimsize'] || kv['size'] || kv['dimensions'];
            if (sizeStr) {
                const a = sizeStr.split(/[\s,;x]+/i).map(Number).filter(Number.isFinite);
                if (a.length >= 3) dims = { x:a[0], y:a[1], z:a[2] };
            }
            const spStr = kv['elementspacing'] || kv['spacing'] || kv['voxelsize'] || kv['voxel size'];
            if (spStr) {
                const sp = spStr.split(/[\s,;x]+/i).map(Number).filter(Number.isFinite);
                if (sp.length >= 3) spacing = [sp[0], sp[1], sp[2]];
            }
            if (kv['type']) dtype = String(kv['type']).toLowerCase();
        }
    }

    // 5) datatype -> constructor + bytes-per-sample
    const typemap = {
        'uint8': Uint8Array, 'u8': Uint8Array, 'uchar': Uint8Array, 'unsigned char': Uint8Array,
        'int8': Int8Array, 'i8': Int8Array, 'char': Int8Array,
        'uint16': Uint16Array, 'u16': Uint16Array, 'ushort': Uint16Array, 'unsigned short': Uint16Array,
        'int16': Int16Array, 'i16': Int16Array, 'short': Int16Array,
        'uint32': Uint32Array, 'u32': Uint32Array, 'unsigned int': Uint32Array,
        'int32': Int32Array, 'i32': Int32Array, 'int': Int32Array,
        'float32': Float32Array, 'f32': Float32Array, 'float': Float32Array,
        'float64': Float64Array, 'f64': Float64Array, 'double': Float64Array,
    };
    let Typed = typemap[dtype] || Uint8Array;

    // 6) If no sidecar dims, try to infer as a power-of-two cube (common for classic CT datasets)
    function tryInferDims(byteLen, B) {
        const cube = Math.round(Math.cbrt(byteLen / B));
        const ok = (cube>0) && (cube*cube*cube*B === byteLen) && (cube & (cube-1))===0; // power-of-two
        return ok ? { x:cube, y:cube, z:cube } : null;
    }

    if (!dims) {
        // try uint8 then uint16, then float32
        let guess = tryInferDims(u8.byteLength, 1);
        if (!guess) { Typed = Uint16Array; dtype = 'uint16'; guess = tryInferDims(u8.byteLength, 2); }
        if (!guess) { Typed = Float32Array; dtype = 'float32'; guess = tryInferDims(u8.byteLength, 4); }
        if (guess) dims = guess;
    }
    if (!dims) {
        throw new Error('RAW: missing dimensions. Provide a sidecar JSON/TXT/MHD with DimSize (x y z) and optional spacing/type.');
    }

    // 7) Reinterpret payload as typed, then normalize to Uint8 if needed
    const voxCount = dims.x * dims.y * dims.z;
    const bytesPerSample = (new Typed(1)).BYTES_PER_ELEMENT;
    const needed = voxCount * bytesPerSample;
    if (u8.byteLength < needed) {
        throw new Error(`RAW: payload too small (${u8.byteLength} < ${needed}) for ${dims.x}x${dims.y}x${dims.z} @ ${dtype}`);
    }

    let outU8;
    if (Typed === Uint8Array) {
        outU8 = u8.subarray(0, voxCount);
    } else {
        const buf = u8.buffer.slice(u8.byteOffset, u8.byteOffset + needed);
        const typed = new Typed(buf);
        outU8 = toUint8(typed).data;
    }

    return {
        name: file.name,
        data: outU8,
        dims,
        spacing,
        dataType: dtype,
        meta: { format: 'raw', inferred: !jsonSidecar && !findSidecar(['mhd','txt','ini']) }
    };
}
