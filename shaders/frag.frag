precision mediump float;
varying vec2 vTexCoords;

void main()
{
    gl_FragColor = vec4(vTexCoords.xy, 0.0, 1.0);
}