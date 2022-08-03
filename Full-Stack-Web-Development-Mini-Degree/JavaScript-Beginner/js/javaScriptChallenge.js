// Display current level 
let level = 2;
let title = "You are on level";

console.log(`${title} ${level}`)

// incres health by 1 three different ways

let health = 50;

health = health + 1;
console.log(health);

health++;
console.log(health);

health += 1;
console.log(health);

// isGameOver if lives are set to 0

let lives = 2;

let isGameOver = false;

isGameOver = lives < 0 ? true : false;

console.log(`Is the game over ${isGameOver}`);
