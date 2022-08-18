let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext('2d');
const screenWidth = 1000;
const screenHeight = 500;
const width = 50;

class GameCharacter {
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
    }

    moveVeritcally() {
        if (this.y > screenHeight - 100) {
            this.speed = -this.speed;         
        }

        this.y += this.speed;
    }

    moveHorizontally() {
        this.x += this.speed;
    }
}

// let rectangle = new GameCharacter(
//     50, 50, 50, 50, "rgb(0, 0, 255)"
//);

let enemies = [
    new GameCharacter(200, 50, width, width, "rgb(0, 0, 255)", 2),
    new GameCharacter(450, screenHeight - 100, width, width, "rgb(0, 0, 255)", 2),
    new GameCharacter(700, 50, width, width, "rgb(0, 0, 255)", 2)
]


let draw = function() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);

    // ctx.fillStyle = rectangle.color;
    // ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    enemies.forEach(function(element) {
        ctx.fillStyle = element.color;
        ctx.fillRect(element.x, element.y, element.width, element.height)
    });


}

let update = function() {
    enemies[0].moveVeritcally();
}

let step = function() {
    update()
    draw();

    window.requestAnimationFrame(step);
}

step();



