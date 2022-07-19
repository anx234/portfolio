varying vec3 vNormal;
uniform sampler2D uTex;// テクスチャは sampler2D 型
varying vec2 vUv;


void main(){

       float alpha = length(vUv - 0.5);
              alpha *= 0.1;
       alpha += 0.7;

   gl_FragColor = vec4(vNormal.x,vNormal.y,vNormal.z,alpha);
}