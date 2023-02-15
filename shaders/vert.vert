precision lowp float;

// xy = vertex position in normalized device coordinates ([-1,+1] range).
attribute vec2 position;

varying vec2 vTexCoords;

void main()
{
    vTexCoords  = position;
    gl_Position = vec4(position, 0.0, 1.0);
}