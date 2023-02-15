import Spectra from './Spectra.js';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.style.margin = '0';
document.body.style.overflow = 'hidden';

var rayCaster = new Spectra(50, 50);

window.requestAnimationFrame(update);

function update(){

    rayCaster.update();

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(rayCaster.canvas, 0, 0, canvas.width, canvas.height)
    
    window.requestAnimationFrame(update);
}