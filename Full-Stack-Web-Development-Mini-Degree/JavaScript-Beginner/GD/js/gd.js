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
        this.maxSpeed = 4;
    }

    moveVeritcally() {
        if (this.y > screenHeight - 100 || this.y < 50) {
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
    new GameCharacter(200, 225, width, width, "rgb(0, 0, 255)", 2),
    new GameCharacter(450, screenHeight - 100, width, width, "rgb(0, 0, 255)", 3),
    new GameCharacter(700, 50, width, width, "rgb(0, 0, 255)", 4)
]

let player = new GameCharacter(50, 225, width, width, "rgb(0, 255, 255)", 0);

document.onkeydown = function(event) {
    let keyPressed = event.keyCode;
    // Right Arrow Key Pressed Move right
    if (keyPressed == 39) {
        player.speed = player.maxSpeed;
    }
    // Left Arrow Key Pressed Move Left
    if(keyPressed == 37) {
        player.speed = -player.maxSpeed;
    }
};

document.onkeyup = function(event) {
    player.speed = 0;
}


let draw = function() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // ctx.fillStyle = rectangle.color;
    // ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    enemies.forEach(function(element) {
        ctx.fillStyle = element.color;
        ctx.fillRect(element.x, element.y, element.width, element.height)
    });


}

let update = function() {
    player.moveHorizontally();

    enemies.forEach(function(element) {
        element.moveVeritcally();
    })

}

let step = function() {
    update()
    draw();

    window.requestAnimationFrame(step);
}

step();



