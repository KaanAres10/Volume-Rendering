import * as nifti from 'nifti-reader-js';
import pako from 'pako';

// Helpers
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
    let min = +Infinity, max = -Infinity;
    const len = dataTyped.length;
    for (let i=0;i<len;i++) { const v = dataTyped[i]; if (v < min) min = v; if (v > max) max = v; }
    const range = (max - min) || 1;
    const out = new Uint8Array(len);
    for (let i=0;i<len;i++) out[i] = Math.round(255 * (dataTyped[i] - min) / range);
    return { data: out, min, max };
}

// NIfTI (.nii / .nii.gz)
export async function loadNifti(file) {
    const ab = await readAsArrayBuffer(file);
    const buf = isGz(file.name) ? pako.ungzip(new Uint8Array(ab)).buffer : ab;

    if (!nifti.isNIFTI(buf)) throw new Error('Not a valid NIFTI file');
    const header = nifti.readHeader(buf);
    const image  = nifti.readImage(header, buf);

    const dtypeMap = {
        2: Uint8Array, 4: Int16Array, 8: Int32Array,
        16: Float32Array, 64: Float64Array, 512: Uint16Array, 768: Uint32Array
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

// RAW (.raw / .raw.gz) + sidecar JSON or META.JSON
async function loadRAW(file, allFiles) {
    const ab0 = await readAsArrayBuffer(file);
    let u8 = new Uint8Array(ab0);
    if (isGz(file.name)) u8 = pako.ungzip(u8);

    // sidecar lookup by basename
    const base = file.name.replace(/\.gz$/i, '').replace(/\.[^.]+$/,'');
    const findSidecar = (exts) => {
        for (const e of exts) {
            const f = findFileByName(allFiles, `${base}.${e}`);
            if (f) return f;
        }
        return null;
    };

    // parse JSON meta
    const jsonSidecar = findSidecar(['meta.json','json']);
    if (!jsonSidecar) throw new Error('RAW: missing sidecar meta.json/json with dims/spacing/type');

    let text = new TextDecoder().decode(await readAsArrayBuffer(jsonSidecar));
    text = text.replace(/^\uFEFF/, ''); // strip BOM if present
    const meta = JSON.parse(text);

    if (!meta.dims || meta.dims.length < 3) throw new Error('RAW: meta.json missing dims [x,y,z]');
    const dims = { x: meta.dims[0], y: meta.dims[1], z: meta.dims[2] };
    const spacing = Array.isArray(meta.spacing) && meta.spacing.length >= 3 ? meta.spacing.slice(0,3) : [1,1,1];
    const dtype = String(meta.type || 'uint8').toLowerCase();

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
    const Typed = typemap[dtype] || Uint8Array;

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
        meta: { format: 'raw+json' }
    };
}

// General Load Function
export async function loadVolumeFromFiles(fileList) {
    const files = [...fileList];
    if (!files.length) throw new Error('No files selected');

    const lc = (s) => s.toLowerCase();
    const parentKey = (f) => {
        const p = f.webkitRelativePath || f.name;
        const parts = lc(p).split('/');
        return parts.slice(0, -1).join('/');
    };
    const baseKey = (name) => {
        let n = lc(name);
        if (n.endsWith('.gz')) n = n.slice(0, -3);
        if (n.endsWith('.meta.json')) return n.slice(0, -('.meta.json'.length));
        return n.replace(/\.[^.]+$/, '');
    };
    const isRaw = (f) => {
        const n = lc(f.name);
        return n.endsWith('.raw') || n.endsWith('.raw.gz');
    };
    const isJson = (f) => {
        const n = lc(f.name);
        return n.endsWith('.meta.json') || n.endsWith('.json');
    };

    // RAW + (meta).json pairing
    if (files.length > 1) {
        const groups = new Map(); // key: parent::base -> { raws:[], jsons:[] }
        for (const f of files) {
            const key = `${parentKey(f)}::${baseKey(f.name)}`;
            if (!groups.has(key)) groups.set(key, { raws: [], jsons: [] });
            const g = groups.get(key);
            if (isRaw(f)) g.raws.push(f);
            else if (isJson(f)) g.jsons.push(f);
        }
        for (const g of groups.values()) {
            if (g.raws.length && g.jsons.length) {
                return await loadRAW(g.raws[0], files);
            }
        }
    }

    // .nii / .nii.gz / .raw(.gz)
    const f = files[0];
    const e = ext(f.name);
    if (e === 'nii' || (e === 'gz' && lc(f.name).endsWith('.nii.gz'))) {
        return await loadNifti(f);
    }
    if (e === 'raw' || (e === 'gz' && lc(f.name).endsWith('.raw.gz'))) {
        return await loadRAW(f, files);
    }

    // Nothing else is supported
    throw new Error(`Unsupported file(s): ${files.map(f => f.name).join(', ')}. Supported: .nii/.nii.gz, .raw + .meta.json`);
}
