uniform float uTime;
uniform float uSize;
uniform float uProgressSpeed;
uniform float uPerlinFrequency;
uniform float uPerlinMultiplier;

attribute float aProgress;
attribute float aSize;
attribute float aAlpha;
varying vec3 vNormal;
varying float vAlpha;

#pragma glslify: perlin3d = require('../partials/perlin3d.glsl')
#pragma glslify: perlin4d = require('../partials/perlin4d.glsl')
void main()
{
    vec3 newPosition = position;
    
    float perlinStrength = perlin4d(vec4(position, uTime*0.001));
    newPosition += normal * perlinStrength;



    vec4 viewPostion = viewMatrix * vec4(newPosition,1.0);
    gl_Position = projectionMatrix * viewPostion;
          vNormal = normal;

    vAlpha = aAlpha;
}