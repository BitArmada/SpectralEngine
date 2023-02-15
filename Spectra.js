import Shader from './Shader.js';

const fs = await Shader.load('frag.frag');
const vs = await Shader.load('vert.vert');

class Spectra{
    constructor(width, height){
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.gl = this.canvas.getContext('webgl');

        this.shader = new Shader(this.gl, vs, fs);

        // set up full screen quad
        var verts = [
            // First triangle:
             1.0,  1.0,
            -1.0,  1.0,
            -1.0, -1.0,
            // Second triangle:
            -1.0, -1.0,
             1.0, -1.0,
             1.0,  1.0
        ];
        this.screenQuadVBO = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenQuadVBO);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(verts), this.gl.STATIC_DRAW);
    }

    clear(){
        this.gl.clearColor(0, 0, 0, 1.0);  // Clear to black, fully opaque
  		this.gl.clearDepth(1.0);           // Clear everything

		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }

    update(){
        this.clear();

        this.gl.useProgram(this.shader.shaderProgram);

        // send position data to vertex shader
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenQuadVBO);
    	this.shader.assignAttribute('position', 2);
		this.gl.enableVertexAttribArray(this.shader.attributes.position.location);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        
    }
}

export default Spectra;