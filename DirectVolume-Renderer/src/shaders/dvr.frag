precision highp sampler3D;
precision highp float;

uniform sampler3D dataTexture;
uniform sampler2D colorTexture;
uniform float samplingRate;
uniform float threshold;
uniform float alphaScale;
uniform bool invertColor;
uniform int composition;

uniform vec3  lightPosObj;
uniform vec3  lightColor;
uniform float lightIntensity;
uniform float ambient;
uniform float shininess;
uniform bool  enableLighting;


uniform int shadingMode;
// Shading modes
const int SHADING_NONE       = 0;
const int SHADING_LAMBERT    = 1;
const int SHADING_PHONG      = 2;
const int SHADING_BLINNPHONG = 3;

uniform int gradientMode;
const int GRADIENT_CENTRAL = 0;
const int GRADIENT_SOBEL   = 1;

uniform float densityScale;


in vec3 vOrigin;
in vec3 vDirection;

out vec4 frag_color;



float sampleData(vec3 coord) {
    return texture(dataTexture, coord).x;
}

vec4 sampleColor(float value) {
    float x = invertColor ? 1.0 - value : value;
    return texture(colorTexture, vec2(x, 0.5));
}

vec2 intersectAABB(vec3 rayOrigin, vec3 rayDir, vec3 boxMin, vec3 boxMax) {
    vec3 tMin = (boxMin - rayOrigin) / rayDir;
    vec3 tMax = (boxMax - rayOrigin) / rayDir;
    vec3 t1 = min(tMin, tMax);
    vec3 t2 = max(tMin, tMax);
    float tNear = max(max(t1.x, t1.y), t1.z);
    float tFar = min(min(t2.x, t2.y), t2.z);

    return vec2(tNear, tFar);
}


// size of a texel in texture space
vec3 voxelSizeTex() {
    vec3 dims = vec3(textureSize(dataTexture, 0));
    return 1.0 / (dims - vec3(1.0));
}

// Central difference (already implemented)
vec3 gradientCentral(vec3 tc) {
    vec3 h = voxelSizeTex();
    float dx = sampleData(tc + vec3(h.x,0,0)) - sampleData(tc - vec3(h.x,0,0));
    float dy = sampleData(tc + vec3(0,h.y,0)) - sampleData(tc - vec3(0,h.y,0));
    float dz = sampleData(tc + vec3(0,0,h.z)) - sampleData(tc - vec3(0,0,h.z));
    return vec3(dx, dy, dz);
}

// Sobel operator in 3D (costlier, stronger edges)
vec3 gradientSobel(vec3 tc) {
    vec3 h = voxelSizeTex();
    float Gx = 0.0;
    float Gy = 0.0;
    float Gz = 0.0;

    for (int dz = -1; dz <= 1; dz++) {
        for (int dy = -1; dy <= 1; dy++) {
            for (int dx = -1; dx <= 1; dx++) {
                float wX = float(dx) * (dx != 0 ? 2.0 : 1.0);
                float wY = float(dy) * (dy != 0 ? 2.0 : 1.0);
                float wZ = float(dz) * (dz != 0 ? 2.0 : 1.0);
                float sampled = sampleData(tc + vec3(dx,dy,dz)*h);

                Gx += wX * sampled;
                Gy += wY * sampled;
                Gz += wZ * sampled;
            }
        }
    }
    return vec3(Gx, Gy, Gz);
}

vec3 gradientAt(vec3 tc) {
    if (gradientMode == GRADIENT_SOBEL) {
        return gradientSobel(tc);
    } else {
        return gradientCentral(tc);
    }
}

vec3 lambert(vec3 baseRGB, vec3 Ptex, vec3 VdirTex, vec3 Ntex) {
    vec3 LposTex = (lightPosObj - vec3(-0.5)) / (vec3(0.5) - vec3(-0.5));
    vec3 N = normalize(Ntex);
    vec3 L = normalize(LposTex - Ptex);
    float diff = max(dot(N, L), 0.0);
    return baseRGB * (ambient + diff * lightIntensity) * lightColor;
}

vec3 phong(vec3 baseRGB, vec3 Ptex, vec3 VdirTex, vec3 Ntex) {
    vec3 LposTex = (lightPosObj - vec3(-0.5)) / (vec3(0.5) - vec3(-0.5));
    vec3 N = normalize(Ntex);
    vec3 L = normalize(LposTex - Ptex);
    vec3 V = normalize(-VdirTex);
    vec3 R = reflect(-L, N);
    float diff = max(dot(N, L), 0.0);
    float spec = (diff > 0.0) ? pow(max(dot(R, V), 0.0), shininess) : 0.0;
    vec3 light = ambient * vec3(1.0) + (diff + spec) * lightColor * lightIntensity;
    return baseRGB * light;
}

vec3 blinnPhong(vec3 baseRGB, vec3 Ptex, vec3 VdirTex, vec3 Ntex) {
    if (!enableLighting) return baseRGB;

    // convert light from object-space [-.5,.5] to texture space [0,1]
    vec3 LposTex = (lightPosObj - vec3(-0.5)) / (vec3(0.5) - vec3(-0.5));

    vec3 N = normalize(Ntex);
    vec3 L = normalize(LposTex - Ptex);
    vec3 V = normalize(-VdirTex);
    vec3 H = normalize(L + V);

    float diff = max(dot(N, L), 0.0);
    float spec = (diff > 0.0) ? pow(max(dot(N, H), 0.0), shininess) : 0.0;

    vec3 light = ambient * vec3(1.0) + (diff + spec) * lightColor * lightIntensity;
    return baseRGB * light;
}


vec4 MIP(vec4 color, vec3 entryPoint, vec3 rayDir, float samples, float tStart, float tEnd, float tIncr) {
    float density = 0.0;
    for (float i = 0.0; i < samples; i += 1.0) {
        float t = tStart + tIncr * i;
        vec3 p = entryPoint + rayDir * t;

        float value = sampleData(p);

        if (value > density) {
            density = value;
        }

        if (density >= 1.0 || t > tEnd) {
            break;
        }
    }

    color.rgb = sampleColor(density).rgb;

    color.a = alphaScale * (invertColor ? 1.0 - density: density);

    return color;
}

vec4 IsoSurface(vec4 color, vec3 entryPoint, vec3 rayDir, float samples, float tStart, float tEnd, float tIncr) {
    for (float i = 0.0; i < samples; i += 1.0) {
        float t = tStart + tIncr * i;
        vec3 p = entryPoint + rayDir * t;

        float value = sampleData(p);

        if (value >= threshold || t > tEnd) {
            vec4 valueColor = sampleColor(value);

            vec3 lightRGB;
            if (shadingMode == SHADING_NONE) {
                lightRGB = valueColor.rgb;
            } else if (shadingMode == SHADING_LAMBERT) {
                lightRGB = lambert(valueColor.rgb, p, rayDir, gradientAt(p));
            } else if (shadingMode == SHADING_PHONG) {
                lightRGB = phong(valueColor.rgb, p, rayDir, gradientAt(p));
            } else if (shadingMode == SHADING_BLINNPHONG) {
                lightRGB = blinnPhong(valueColor.rgb, p, rayDir, gradientAt(p));
            }

            color.rgb = lightRGB;
            color.a   = alphaScale;
            break;
        }
    }

    return color;
}

vec4 EmissonAbsorption(vec4 color, vec3 entryPoint, vec3 rayDir, float samples, float tStart, float tEnd, float tIncr) {
    for (float i = 0.0; i < samples; i += 1.0) {
        float t = tStart + tIncr * i;
        vec3 p = entryPoint + rayDir * t;

        float value = sampleData(p);
        vec4 valueColor = sampleColor(value);

        vec3 lightRGB;
        if (shadingMode == SHADING_NONE) {
            lightRGB = valueColor.rgb;
        } else if (shadingMode == SHADING_LAMBERT) {
            lightRGB = lambert(valueColor.rgb, p, rayDir, gradientAt(p));
        } else if (shadingMode == SHADING_PHONG) {
            lightRGB = phong(valueColor.rgb, p, rayDir, gradientAt(p));
        } else if (shadingMode == SHADING_BLINNPHONG) {
            lightRGB = blinnPhong(valueColor.rgb, p, rayDir, gradientAt(p));
        }
        // Beer-Lambert
        float sigma = max(0.0, value * densityScale);
        valueColor.a = (1.0 - exp(-sigma * tIncr)) * valueColor.a;
        valueColor.a = clamp(valueColor.a, 0.0, 1.0);

        // Front to Back Alpha Blending
        color.rgb += (1.0 - color.a) * valueColor.a * lightRGB;
        color.a += (1.0 - color.a) * valueColor.a;

        // Early Exit
        if (color.a >= 0.97 || t > tEnd) {
            break;
        }
    }
    return color;
}

vec4 Average(vec4 color, vec3 entryPoint, vec3 rayDir, float samples, float tStart, float tEnd, float tIncr) {
    float sum = 0.0;
    float count = 0.0;

    for (float i = 0.0; i < samples; i += 1.0) {
        float t = tStart + tIncr * i;
        if (t > tEnd) {
            break;
        }
        vec3 p = entryPoint + rayDir * t;

        float value = sampleData(p);

        sum += value;
        count++;

    }
    float mean = (count > 0.0) ? (sum / count) : 0.0;
    vec3 rgb = sampleColor(mean).rgb;
    return vec4(rgb, alphaScale);
}



void main() {
    vec3 rayDir = normalize(vDirection);
    vec3 aabbmin = vec3(-0.5);
    vec3 aabbmax = vec3(0.5);
    vec2 intersection = intersectAABB(vOrigin, rayDir, aabbmin, aabbmax);

    vec4 color = vec4(0.0);

    if (intersection.x <= intersection.y) {
        intersection.x = max(intersection.x, 0.0);

        vec3 entryPoint = vOrigin + rayDir * intersection.x;
        vec3 exitPoint = vOrigin + rayDir * intersection.y;

        vec3 dimensions = vec3(textureSize(dataTexture, 0));
        vec3 entryToExit = exitPoint - entryPoint;
        float samples = ceil(samplingRate * length(entryToExit * (dimensions - vec3(1.0))));
        float tEnd = length(entryToExit);
        float tIncr = tEnd / samples;
        float tStart = 0.5 * tIncr;

        vec3 texEntry = (entryPoint - aabbmin) / (aabbmax - aabbmin);

        if (composition == 0)
        {
            color = MIP(color, texEntry, rayDir, samples, tStart, tEnd, tIncr);
        } else if (composition == 1){
            color = IsoSurface(color, texEntry, rayDir, samples, tStart, tEnd, tIncr);
        } else if (composition == 2) {
            color = EmissonAbsorption(color, texEntry, rayDir, samples, tStart, tEnd, tIncr);
        } else if (composition == 3) {
            color = Average(color, texEntry, rayDir, samples, tStart, tEnd, tIncr);
        }
    }
    frag_color = color;
}
