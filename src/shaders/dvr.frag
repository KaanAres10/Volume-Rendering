precision highp sampler3D;
precision highp float;

uniform sampler3D dataTexture;
uniform sampler2D colorTexture;
uniform float samplingRate;
uniform float threshold;
uniform float alphaScale;
uniform bool invertColor;
uniform int composition;

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
            color.rgb = sampleColor(value).rgb;
            color.a = alphaScale;
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

        // Front to Back Alpha Blending
        valueColor.a *= value * alphaScale;
        color.rgb += (1.0 - color.a) * valueColor.a * valueColor.rgb;
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
