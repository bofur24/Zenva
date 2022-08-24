let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext('2d');
const screenWidth = 1000;
const screenHeight = 500;
const width = 50;
let isGameLive = true;

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

let goal = new GameCharacter(screenWidth - width, 200, width, 100, "rgb(0, 0, 0)", 0);

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

let checkCollisions = function(rect1, rect2) {  
    let rect1x2 = rect1.x + rect1.width;
    let rect2x2 = rect2.x + rect2.width;
    let rect1y2 = rect1.y + rect1.height;
    let rect2y2 = rect2.y + rect2.height;
    
    return rect1.x < rect2x2 && rect1x2 > rect2.x && rect1.y < rect2y2 && rect1y2 > rect2.y;
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

    ctx.fillStyle = goal.color;
    ctx.fillRect(goal.x, goal.y, goal.width, goal.height);

}

let update = function() {
    if (checkCollisions(player, goal)) {
        endGameLogic("You Win!!")
    }    
    player.moveHorizontally();

    enemies.forEach(function(element) {
        if (checkCollisions(player, element)) {
            endGameLogic("Game Over!!")
        }
        element.moveVeritcally();
    });

}

let endGameLogic = function(text) {
    isGameLive = false;
    alert(text);
    window.location = "";
}

let step = function() {
    update()
    draw();
    if (isGameLive) {
        window.requestAnimationFrame(step);
    }    
}

step();



