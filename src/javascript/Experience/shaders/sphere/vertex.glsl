const float PI = 3.14159;

varying vec3 vNormal;
uniform float uTime;// 時間
uniform float uFreaquency;// 時間
uniform float uSize;// 時間
uniform float uTwist;// 時間
varying vec2 vUv;
#pragma glslify: perlin4d = require('../partials/perlin4d.glsl')
#pragma glslify: perlin3d = require('../partials/perlin3d.glsl')

vec3 twist(vec3 p, float power){
    float s = sin(power * p.x);
    float c = cos(power * p.x);
    mat3 m = mat3(
        1.0, 0.0, 0.0,
        0.0,   c,   s,
        0.0,  -s,   c
    );
    return m * p;
}

float rand(vec2 p){
    return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
}
// https://github.com/dmnsgn/glsl-rotate
mat3 rotation3dY(float angle) {
    float s = sin(angle);
    float c = cos(angle);

    return mat3(
      c, 0.0, -s,
      0.0, 1.0, 0.0,
      s, 0.0, c
    );
  }
  
vec3 rotateY(vec3 v, float angle) {
  return rotation3dY(angle) * v;
}

    void main() {
      
    vec3 newPosition = position;
    
    float perlinStrength = perlin4d(vec4(position, uTime*0.0001));
    
    newPosition += normal * sin(perlinStrength * uFreaquency );

//候補１
        // newPosition -= tan(normal * uTwist);
newPosition -= tan(normal.x * uTwist) - 0.1;

    // newPosition += rotateY(newPosition,angle)
  //  float angle = sin(uv.y * uFreaquency) * 0.001;
  //  newPosition += twist(newPosition, angle);
float t = 0.02 / abs(0.5 - length(newPosition));

    vec4 viewPostion = viewMatrix * vec4(newPosition,uSize);

// viewPostion.x= fract(cos(perlinStrength)*1.0) * 1.0 -2.0;

    gl_Position = projectionMatrix * viewPostion;
    

    //vec3 newPosition = position + sin(uTime);


    /*
  vec4 modelPosition =  viewMatrix * vec4(position,1.0);

    float elevation = sin(modelPosition.x * rand(5) + uTime * 0.005) * 0.3
                    * sin(modelPosition.z * 3.0 + uTime * 0.005) * 0.3;
modelPosition.y += elevation * uFreaquency + fract(sin(90)*1.0);


 gl_Position = projectionMatrix * modelPosition;

*/
      // vNormal = normal + abs(sin(uTime * 0.001));
      vNormal = normal;
          vUv = uv;
    }