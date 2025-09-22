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
    invertColor: true,
    alphaScale: 1.0,
    shading: 'None',
    gradient: 'Central Difference',
};

export async function loadUint8VolumeFromZip(url, dims) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    const blob = await res.blob();

    const zip = await JSZip.loadAsync(blob);

    // pick first file (Observable used zip.filenames[0])
    const firstName = Object.keys(zip.files).find(n => !zip.files[n].dir);
    if (!firstName) throw new Error('No file inside zip');
    const inner = zip.file(firstName);
    const data = await inner.async('uint8array'); // Uint8Array view

    const expected = dims.x * dims.y * dims.z;
    if (data.length !== expected) {
        console.warn(`Size mismatch: got ${data.length}, expected ${expected}`);
    }
    return data;
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


// Retrieving data
const dataDescription = {
    name: "Head",
    acknowledgement: "Divine Augustine",
    licence: "The Code Project Open License",
    description: "CT scan of a human head",
    link: "https://www.codeproject.com/Articles/352270/Getting-Started-with-Volume-Rendering-using-OpenGL",
    dataType: "uint8",
    scale: [-1, -1, 1 / 1.65],
    xExtent: 256,
    yExtent: 256,
    zExtent: 109
};

const dims = { x: dataDescription.xExtent, y: dataDescription.yExtent, z: dataDescription.zExtent };
const dataValues = await loadUint8VolumeFromZip(
  "https://kaanares10.github.io/Volume-Rendering/head_256x256x109.zip",
  dims
);
console.log('Volume data loaded:');
console.log('Type:', dataValues.constructor.name);
console.log('Length:', dataValues.length);
console.log('First 20 values:', dataValues.slice(0, 20));


// Creating 3D Texture
const volumeTexture= new THREE.Data3DTexture(dataValues, dataDescription.xExtent, dataDescription.yExtent, dataDescription.zExtent);
volumeTexture.format = THREE.RedFormat;
volumeTexture.type = THREE.UnsignedByteType;
volumeTexture.minFilter = THREE.LinearFilter;
volumeTexture.magFilter = THREE.LinearFilter;
volumeTexture.wrapS = THREE.ClampToEdgeWrapping;
volumeTexture.wrapT = THREE.ClampToEdgeWrapping;
volumeTexture.wrapS = THREE.ClampToEdgeWrapping;
volumeTexture.needsUpdate = true;

// Creating Color Texture
let colorTexture = makeColorTexture();

// Setting up 3D scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#1f1f1f");

const geometry = new THREE.BoxGeometry(1, 1, 1);

const box = new THREE.Mesh(geometry);
box.scale.set(dataDescription.scale[0], dataDescription.scale[1], dataDescription.scale[2]);

const line = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial({color: 0x999999})
);
box.add(line);

const material = new THREE.RawShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: {
        dataTexture: {value: volumeTexture},
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

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
renderer.setPixelRatio(devicePixelRatio);
renderer.domElement.style.border = "1px solid black";

document.getElementById("three-root").appendChild(renderer.domElement);

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


gui.add(renderProps, 'samplingRate', 0.1, 4.0, 0.1)
    .name('Sampling rate')
    .onChange(v => material.uniforms.samplingRate.value = v);



const lightFolder = gui.addFolder('Lighting');
const lightIntensityCtrl = lightFolder.add(material.uniforms.lightIntensity, 'value', 0.0, 10.0, 0.1).name('Intensity');
const ambientCtrl        = lightFolder.add(material.uniforms.ambient, 'value', 0.0, 1.0, 0.01).name('Ambient');
const shininessCtrl      = lightFolder.add(material.uniforms.shininess, 'value', 1.0, 128.0, 1.0).name('Shininess');


gui.add(renderProps, 'invertColor').name('Invert color')
    .onChange(v => { material.uniforms.invertColor.value = v; });
const rotFolder = gui.addFolder('Rotation');

rotFolder.add(renderProps.rotations, 'x').name('X');
rotFolder.add(renderProps.rotations, 'y').name('Y');
rotFolder.add(renderProps.rotations, 'z').name('Z');


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
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
