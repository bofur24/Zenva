let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext('2d');
const screenWidth = 1000;
const screenHeight = 500;

class GameCharacter {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

let rectangle = new GameCharacter(
    50, 50, 50, 50, "rgb(0, 0, 255)"
);

let draw = function() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);

    ctx.fillStyle = rectangle.color;
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}

let step = function() {
    draw();
    window.requestAnimationFrame(step);
}

step();
