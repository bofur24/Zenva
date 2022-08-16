let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext('2d');
const screenWidth = 1000;
const screenHeight = 500;

let step = function() {
    
    window.requestAnimationFrame(step)
}

step();