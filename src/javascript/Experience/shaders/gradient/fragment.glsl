uniform float uTime;
uniform vec3 uStartColor;
uniform vec3 uEndColor;

varying vec2 vUv;

float random2d(vec2 n)
{ 
	return fract(sin(dot(n, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main()
{
    vec3 endColor = uEndColor;
    vec3 finalColor = mix(uStartColor, uEndColor, vUv.y);

    gl_FragColor = vec4(vUv,1.0, 1.0);
     // gl_FragColor = vec4(position, 1.0);
}