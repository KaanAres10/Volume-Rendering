import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import VERT from './shaders/dvr.vert?raw';
import FRAG from './shaders/dvr.frag?raw';

import JSZip from 'jszip';
import chroma from 'chroma-js';

import GUI from 'lil-gui';

import * as d3 from 'd3';

import { TransferFunctionEditor }   from './tfeditor_js/TransferFunctionEditor.js';
import { TransparencyEditor }   from './tfeditor_js/TransparencyEditor.js';
import { ColorMapEditor }   from './tfeditor_js/ColorMapEditor.js';
import { ColorPicker }   from './tfeditor_js/ColorPicker.js';
import {update} from "three/addons/libs/tween.module.js";

import { loadVolumeFromFiles} from './file_loader/volume_loader.js';
import {loadNifti} from "./file_loader/volume_loader.js"

const COMP = { MIP:0, ISO:1, EA:2, AVG:3 };


const compositions = [
    { name: 'Maximum Intensity', id: 'MIP' },
    { name: 'First Hit',        id: 'ISO' },
    { name: 'Emission/Absorption', id: 'EA' },
    { name: 'Average',           id: 'AVG' },
];

const SHADING = {
    NONE: 0,
    LAMBERT: 1,
    PHONG: 2,
    BLINN_PHONG: 3
};

const shadingOptions = [
    { name: 'None', id: SHADING.NONE },
    { name: 'Lambert', id: SHADING.LAMBERT },
    { name: 'Phong', id: SHADING.PHONG },
    { name: 'Blinn-Phong', id: SHADING.BLINN_PHONG }
];

const GRADIENT = {
    CENTRAL: 0,
    SOBEL: 1
};

const gradientOptions = [
    { name: 'Central Difference', id: GRADIENT.CENTRAL },
    { name: 'Sobel', id: GRADIENT.SOBEL }
];

const renderProps = {
    composition: 'Emission/Absorption',
    rotations: { x: false, y: true, z: false },
    speed: 0.002,
    samplingRate: 1.0,
    threshold: 0.5,
    palette: 'Greys',
    invertColor: false,
    alphaScale: 1.0,
    shading: 'None',
    gradient: 'Central Difference',
};

let renderer;
let rafId;

function initRenderer(container) {
    if (renderer) return renderer;

    renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: false,
        depth: false,
        stencil: false,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false,
        preserveDrawingBuffer: false,
    });

    renderer.setSize(800, 600);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

    container.appendChild(renderer.domElement);

    renderer.domElement.addEventListener('webglcontextlost', (e) => {
        e.preventDefault();
        cancelAnimationFrame(rafId);
        console.warn('WebGL context lost');
    });

    renderer.domElement.addEventListener('webglcontextrestored', () => {
        console.warn('WebGL context restored');
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        rafId = requestAnimationFrame(animate);
    });

    return renderer;
}

function setVolumeTexture(newTex) {
    const oldTex = material.uniforms.dataTexture.value;
    if (oldTex && oldTex !== newTex) {
        try { oldTex.dispose(); } catch {}
    }
    material.uniforms.dataTexture.value = newTex;
    material.uniforms.dataTexture.value.needsUpdate = true;
}

export function makeColorTexture(count = 256) {
    // Create a color scale based on the selected palette using chroma-js.
    const scale = chroma.scale(renderProps.palette);

    // Create an array to hold the color values.
    const colorData = new Uint8Array(count * 4); // RGBA

    for (let i = 0; i < count; ++i) {
        const value = i / (count - 1.0);
        const [r, g, b] = scale(value).rgb();

        const stride = i * 4;
        colorData[stride + 0] = r;
        colorData[stride + 1] = g;
        colorData[stride + 2] = b;
        colorData[stride + 3] = 255; // Alpha
    }

    const texture = new THREE.DataTexture(colorData, count, 1);
    texture.format = THREE.RGBAFormat;
    texture.type = THREE.UnsignedByteType;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;

    return texture;
}

function setBoxScale(dims, spacing) {
    // physical size per axis
    const Sx = dims.x * spacing[0];
    const Sy = dims.y * spacing[1];
    const Sz = dims.z * spacing[2];

    const m = Math.max(Sx, Sy, Sz) || 1;

    box.scale.set(-Sx / m, -Sy / m,  Sz / m);
}

// Creating Color Texture
let colorTexture = makeColorTexture();

// Setting up 3D scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#1f1f1f");

const geometry = new THREE.BoxGeometry(1, 1, 1);

const box = new THREE.Mesh(geometry);

const line = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial({color: 0x999999})
);
box.add(line);


const HEAD_SPACING = [1.0, 1.0, 1.40];
setBoxScale(
    { x: 256, y: 256, z: 109 },
    HEAD_SPACING
);


const material = new THREE.RawShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: {
        dataTexture: {value: null},
        colorTexture: {value: colorTexture},
        cameraPosition: {value: new THREE.Vector3()},
        samplingRate: {value: renderProps.samplingRate},
        threshold: {value: renderProps.threshold},
        alphaScale: {value: renderProps.alphaScale},
        invertColor: {value: renderProps.invertColor},
        composition: {value: COMP.EA},


        shadingMode: { value: SHADING.NONE },

        gradientMode: { value: GRADIENT.CENTRAL },

        lightPosObj:   { value: new THREE.Vector3(0.8, 0.6, 0.8) }, // object space [-0.5,0.5]
        lightColor:    { value: new THREE.Color(1,1,1) },
        lightIntensity:{ value: 2.0 },
        ambient:       { value: 0.5 },
        shininess:     { value: 32.0 },
        enableLighting:{ value: true },

        densityScale: { value: 100.0 }
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
    side: THREE.BackSide,
    transparent: true,
});

box.material = material;

scene.add(box);

const width = 800;
const height = 600;

const fov = 45;
const aspect = width / height;
const near = 0.1;
const far = 1000;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, -2);
camera.lookAt(new THREE.Vector3(0, 0, 0));

initRenderer(document.getElementById("three-root"));

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", () => renderer.render(scene, camera));


// GUI
// Create GUI
const gui = new GUI({container: document.getElementById('gui-mount')});

const compCtrl = gui.add(renderProps, 'composition', [
    'Maximum Intensity',
    'First Hit',
    'Emission/Absorption',
    'Average'
]).name('Composition');

const shadingCtrl = gui.add(renderProps, 'shading', shadingOptions.map(o => o.name))
    .name('Shading')
    .onChange(name => {
        const id = shadingOptions.find(o => o.name === name)?.id ?? SHADING.NONE;
        material.uniforms.shadingMode.value = id;

        // show/hide gradient depending on shading
        if (id === SHADING.NONE) {
            gradientCtrl.hide();
        } else {
            gradientCtrl.show();
        }
        updateUI();
    });

const gradientCtrl = gui.add(renderProps, 'gradient', gradientOptions.map(o => o.name))
    .name('Gradient')
    .onChange(name => {
        const id = gradientOptions.find(o => o.name === name)?.id ?? GRADIENT.CENTRAL;
        material.uniforms.gradientMode.value = id;
    });


const densityCtrl = gui.add(material.uniforms.densityScale, 'value', 0.1, 300.0, 0.1)
    .name('Density scale (σ)')
    .onChange(v => { material.uniforms.densityScale.value = v; });

// Keep refs for toggling
const isoCtrl = gui.add(renderProps, 'threshold', 0.0, 1.0, 0.0001)
    .name('Iso Value')
    .onChange(v => {
        renderProps.threshold = v;
        material.uniforms.threshold.value = v;
    });

const alphaCtrl = gui.add(renderProps, 'alphaScale', 0.0, 2.0, 0.0001)
    .name('Alpha scale')
    .onChange(v => material.uniforms.alphaScale.value = v);


const samplingCtrl= gui.add(renderProps, 'samplingRate', 0.1, 4.0, 0.1)
    .name('Sampling rate')
    .onChange(v => material.uniforms.samplingRate.value = v);



const lightFolder = gui.addFolder('Lighting');
const lightIntensityCtrl = lightFolder.add(material.uniforms.lightIntensity, 'value', 0.0, 10.0, 0.1).name('Intensity');
const ambientCtrl        = lightFolder.add(material.uniforms.ambient, 'value', 0.0, 1.0, 0.01).name('Ambient');
const shininessCtrl      = lightFolder.add(material.uniforms.shininess, 'value', 1.0, 128.0, 1.0).name('Shininess');


const invertCtrl = gui.add(renderProps, 'invertColor').name('Invert color')
    .onChange(v => { material.uniforms.invertColor.value = v; });
const rotFolder = gui.addFolder('Rotation');

const rotXCtrl= rotFolder.add(renderProps.rotations, 'x').name('X');
const rotYCtrl = rotFolder.add(renderProps.rotations, 'y').name('Y');
const rotZCtrl = rotFolder.add(renderProps.rotations, 'z').name('Z');


compCtrl.onChange(name => {
    const id = compositions.find(c => c.name === name)?.id || 'MIP';
    material.uniforms.composition.value =
        id === 'MIP' ? COMP.MIP :
            id === 'ISO' ? COMP.ISO :
                id === 'EA'  ? COMP.EA  : COMP.AVG;

    if (id === 'MIP' || id === 'AVG') {
        renderProps.shading = 'None';
        material.uniforms.shadingMode.value = SHADING.NONE;
    }
    material.needsUpdate = true;
    updateUI();
});

updateUI();


const tfFolder = gui.addFolder('Transfer Function');
tfFolder.open();

// Host inside the folder
const tfHost = document.createElement('div');
tfHost.style.width = '100%';
tfHost.style.height = '300px';
tfHost.style.borderRadius = '6px';
tfHost.style.background = '#1f1f1f';

// Buttons row
const btnRow = document.createElement('div');
btnRow.style.display = 'flex';
btnRow.style.gap = '8px';
btnRow.style.marginTop = '8px';

const contentEl =
    tfFolder.domElement.querySelector(':scope > .children')  // preferred
    || tfFolder.domElement.querySelector('.children')        // fallback
    || tfFolder.domElement.children[1];                      // last resort

contentEl.appendChild(tfHost);
contentEl.appendChild(btnRow);
// Init editor
const tf = new TransferFunctionEditor(tfHost, {
    initialColorMap: {
        colorStops: [
            { stop: 0.0, color: 'blue' },
            { stop: 0.5, color: 'white' },
            { stop: 1.0, color: 'red' }
        ],
        interpolationMethod: 'HSL',
        discrete: false,
        bins: 8
    }
});

const fileInput = document.getElementById('volume-input');
if (fileInput) {
    fileInput.addEventListener('change', async (e) => {
        try {
            const vol = await loadVolumeFromFiles(e.target.files);
            const volumeTexture = new THREE.Data3DTexture(vol.data, vol.dims.x, vol.dims.y, vol.dims.z);
            volumeTexture.format = THREE.RedFormat;
            volumeTexture.type = THREE.UnsignedByteType;
            volumeTexture.minFilter = THREE.LinearFilter;
            volumeTexture.magFilter = THREE.LinearFilter;
            volumeTexture.wrapS = volumeTexture.wrapT = volumeTexture.wrapR = THREE.ClampToEdgeWrapping;
            volumeTexture.needsUpdate = true;

            setVolumeTexture(volumeTexture);

            const [sx, sy, sz] = vol.spacing || [1,1,1];
            setBoxScale(vol.dims, [sx, sy, sz]);

            renderProps.composition = 'Emission/Absorption';
            material.uniforms.composition.value = COMP.EA;
            material.needsUpdate = true;
            renderer.render(scene, camera);
        } catch (err) {
            console.error(err);
            alert(err.message || String(err));
        }
    });
}

function updateUI() {
    // resolve current composition
    const compName = renderProps.composition;
    const compId =
        compName === 'Maximum Intensity'      ? COMP.MIP :
            compName === 'First Hit'              ? COMP.ISO :
                compName === 'Emission/Absorption'    ? COMP.EA  :
                    COMP.AVG;

    // resolve shading mode
    const shadeId = shadingOptions.find(o => o.name === renderProps.shading)?.id ?? SHADING.NONE;


    const isEA  = compId === COMP.EA;
    const isISO = compId === COMP.ISO;
    const isMIP = compId === COMP.MIP;
    const isAVG = compId === COMP.AVG;

    isEA ? densityCtrl.show() : densityCtrl.hide();


    (isISO || isMIP || isAVG) ? alphaCtrl.show() : alphaCtrl.hide();

    isISO ? isoCtrl.show() : isoCtrl.hide();

    (isEA || isISO) ? shadingCtrl.show() : shadingCtrl.hide();


    if ((isEA || isISO) && shadeId !== SHADING.NONE) {
        gradientCtrl.show();
        lightFolder.show();
    } else {
        gradientCtrl.hide();
        lightFolder.hide();
    }
}
function lerpAlpha(stops, x) {
    if (!stops || !stops.length) return 1.0;
    x = Math.min(1, Math.max(0, x));
    const s = stops.slice().sort((a,b)=>a.stop-b.stop);
    if (x <= s[0].stop) return s[0].alpha;
    for (let i=0;i<s.length-1;i++){
        const a=s[i], b=s[i+1];
        if (x>=a.stop && x<=b.stop){
            const t=(x-a.stop)/Math.max(1e-6,(b.stop-a.stop));
            return (1-t)*a.alpha + t*b.alpha;
        }
    }
    return s[s.length-1].alpha;
}

function makeTFTextureFromEditor(tfObj, count=256, alphaScale=1.0) {
    const { colorMap, alphaStops } = tfObj;
    const { colorStops, interpolationMethod='RGB', discrete=false, bins=8 } = colorMap;

    const positions = colorStops.map(s=>s.stop);
    const colorsStr = colorStops.map(s=>s.color);
    const mode = interpolationMethod.toLowerCase();
    const cscale = chroma.scale(colorsStr).domain(positions).mode(mode);

    const lut = new Uint8Array(count*4);
    const steps = discrete ? Math.max(2, (bins|0)) : count;

    for (let i=0;i<count;i++){
        let v = i/(count-1);
        if (discrete){
            const q = Math.floor(v*steps)/(steps-1);
            v = Math.min(1, Math.max(0, q));
        }
        const [r,g,b] = cscale(v).rgb();
        const a = Math.max(0, Math.min(1, lerpAlpha(alphaStops, v) * alphaScale));
        const k = 4*i;
        lut[k+0]=r|0; lut[k+1]=g|0; lut[k+2]=b|0; lut[k+3]=Math.round(255*a);
    }

    const tex = new THREE.DataTexture(lut, count, 1);
    tex.format = THREE.RGBAFormat;
    tex.type = THREE.UnsignedByteType;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.needsUpdate = true;
    return tex;
}

function applyTransferFunction() {
    const state = tf.getTransferFunction();
    const tex = makeTFTextureFromEditor(state, 256, renderProps.alphaScale);
    colorTexture = tex;
    material.uniforms.colorTexture.value = tex;
    material.uniforms.colorTexture.value.needsUpdate = true;
}

// Update LUT on change
tf.addListener(applyTransferFunction);
applyTransferFunction();


await loadExample('Subclavia')

async function loadExample(name) {
    if (!name) return;

    const meta = await fetch(`/examples/${name}.meta.json`).then(r => {
        if (!r.ok) throw new Error(`Could not load ${name}.meta.json`);
        return r.json();
    });

    const buf = await fetch(`/examples/${name}.raw`).then(r => {
        if (!r.ok) throw new Error(`Could not load ${name}.raw`);
        return r.arrayBuffer();
    });

    const typemap = {
        uint8: Uint8Array, int8: Int8Array,
        uint16: Uint16Array, int16: Int16Array,
        float32: Float32Array, float64: Float64Array
    };
    const Typed = typemap[(meta.type || 'uint8').toLowerCase()] || Uint8Array;

    // reinterpret the buffer as the correct type
    const typed = new Typed(buf);

    // sanity check: length matches dims
    const voxCount = meta.dims[0] * meta.dims[1] * meta.dims[2];
    if (typed.length < voxCount) {
        throw new Error(`RAW too small: ${typed.length} < ${voxCount}`);
    }

    // normalize to Uint8 if needed (no spread!)
    let voxels;
    if (Typed === Uint8Array) {
        // slice to exact voxCount in case of padding
        voxels = typed.length === voxCount ? typed : typed.subarray(0, voxCount);
    } else {
        // pass 1: min/max
        let min = Infinity, max = -Infinity;
        for (let i = 0; i < voxCount; i++) {
            const v = typed[i];
            if (v < min) min = v;
            if (v > max) max = v;
        }
        const range = max - min || 1;

        // pass 2: scale to 0..255
        voxels = new Uint8Array(voxCount);
        for (let i = 0; i < voxCount; i++) {
            voxels[i] = Math.round(255 * (typed[i] - min) / range);
        }
    }

    const tex = new THREE.Data3DTexture(
        voxels,
        meta.dims[0], meta.dims[1], meta.dims[2]
    );
    tex.format = THREE.RedFormat;
    tex.type   = THREE.UnsignedByteType;
    tex.minFilter = tex.magFilter = THREE.LinearFilter;
    tex.wrapS = tex.wrapT = tex.wrapR = THREE.ClampToEdgeWrapping;
    tex.needsUpdate = true;

    setVolumeTexture(tex);

    const spacing = meta.spacing || [1,1,1];
    setBoxScale({ x: meta.dims[0], y: meta.dims[1], z: meta.dims[2] }, spacing);

    await tryLoadConfigAndApply(name);
    renderer.render(scene, camera);
}

document.getElementById('example-select')
    .addEventListener('change', e => loadExample(e.target.value));


async function tryLoadConfigAndApply(name) {
    const base = String(name).replace(/(\.nii(\.gz)?|\.raw|\.zip|\.json)$/i, '');
    const url  = `/examples/${base}.config.json`;
    const res  = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) return;
    const cfg = await res.json();
    applyExampleConfig(cfg);
}

function applyExampleConfig(cfg = {}) {
    // Transfer Function
    if (cfg.tf) {
        let appliedViaEditor = false;

        if (typeof tf?.setTransferFunction === 'function') {
            try {
                tf.setTransferFunction({
                    colorMap:   cfg.tf.colorMap,
                    alphaStops: cfg.tf.alphaStops || []
                });
                applyTransferFunction();
                appliedViaEditor = true;
            } catch (e) {
                console.warn('TF editor rejected preset, falling back to direct LUT', e);
            }
        }

        // Fallback: build LUT directly from config and push to shader
        if (!appliedViaEditor) {
            const alphaScale =
                (cfg.render && typeof cfg.render.alphaScale === 'number')
                    ? cfg.render.alphaScale
                    : renderProps.alphaScale;

            const tex = makeTFTextureFromEditor(
                { colorMap: cfg.tf.colorMap, alphaStops: cfg.tf.alphaStops || [] },
                256,
                alphaScale
            );
            colorTexture = tex;
            material.uniforms.colorTexture.value = tex;
            material.uniforms.colorTexture.value.needsUpdate = true;
        }
    }

    // Render
    if (cfg.render) {
        if (cfg.render.composition) {
            compCtrl?.setValue(cfg.render.composition);
        }
        if (cfg.render.shading) {
            shadingCtrl?.setValue(cfg.render.shading);
        }

        if (cfg.render.gradient) {
            gradientCtrl?.setValue(cfg.render.gradient);
        }

        if (typeof cfg.render.samplingRate === 'number') {
            samplingCtrl?.setValue(cfg.render.samplingRate);
            material.uniforms.samplingRate.value = cfg.render.samplingRate;
        }
        if (typeof cfg.render.alphaScale === 'number') {
            alphaCtrl?.setValue(cfg.render.alphaScale);
            material.uniforms.alphaScale.value = cfg.render.alphaScale;
        }
        if (typeof cfg.render.threshold === 'number') {
            isoCtrl?.setValue(cfg.render.threshold);
            material.uniforms.threshold.value = cfg.render.threshold;
        }
        if (typeof cfg.render.invertColor === 'boolean') {
            invertCtrl?.setValue(cfg.render.invertColor);
            material.uniforms.invertColor.value = cfg.render.invertColor; // bool
        }
        if (typeof cfg.render.densityScale === 'number') {
            densityCtrl?.setValue(cfg.render.densityScale);
            material.uniforms.densityScale.value = cfg.render.densityScale;
        }
        if (cfg.render.rotations) {
            if ('x' in cfg.render.rotations) rotXCtrl?.setValue(!!cfg.render.rotations.x);
            if ('y' in cfg.render.rotations) rotYCtrl?.setValue(!!cfg.render.rotations.y);
            if ('z' in cfg.render.rotations) rotZCtrl?.setValue(!!cfg.render.rotations.z);
        }

        // Lighting
        if (cfg.render?.lighting) {
            const L = cfg.render.lighting;
            if (typeof L.intensity === 'number') {
                material.uniforms.lightIntensity.value = L.intensity;
            }
            if (typeof L.ambient === 'number') {
                material.uniforms.ambient.value = L.ambient;
            }
            if (typeof L.shininess === 'number') {
                material.uniforms.shininess.value = L.shininess;
            }
            if (typeof L.enabled === 'boolean' && material.uniforms.enableLighting) {
                material.uniforms.enableLighting.value = L.enabled;
            }
        }

        if (cfg.render?.lighting) {
            const L = cfg.render.lighting;
            if (typeof L.intensity === 'number') lightIntensityCtrl.setValue(L.intensity);
            if (typeof L.ambient   === 'number') ambientCtrl.setValue(L.ambient);
            if (typeof L.shininess === 'number') shininessCtrl.setValue(L.shininess);
        }

    }
    updateUI();
    renderer.render(scene, camera);
}
// Rendering Loop
function animate() {
    if (material) {
        box.material.uniforms.cameraPosition.value.copy(camera.position);
    }

    const s = renderProps.speed || 0.002;
    const rot = renderProps.rotations;
    if (rot.x) box.rotation.x += s;
    if (rot.y) box.rotation.y += s;
    if (rot.z) box.rotation.z += s;

    controls.update?.();

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(animate);
}
rafId = requestAnimationFrame(animate);