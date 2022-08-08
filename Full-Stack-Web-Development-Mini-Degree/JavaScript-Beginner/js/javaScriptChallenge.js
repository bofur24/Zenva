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
let numberOfLives = 3;

let isGameOver = !(numberOfLives > 0)


//let lives = 2;

//let isGameOver = false;

//isGameOver = lives < 0 ? true : false;

console.log(`Is the game over ${isGameOver}`);

let levels = [
    [1.1, 1.2, 1.3 ],
    [2.1, 2.2, 2.3, 2.4],
    [3.1, 3.2]
]

// remove one item from the second level

levels[1].pop();
console.log(levels[1])

// added another level to the third level
levels[2].push(3.3);
console.log(levels[2]);


// return the health % from a function
const maxHealth = 105;
currentHealth = 77;

function heal(healAmount = 10) {
    let newHealth =  currentHealth += healAmount;
    currentHealth = newHealth > 105 ? maxHealth : newHealth;
    return calculatePercent(currentHealth, maxHealth);

}

function calculatePercent(dividend, divisor) {
    return (dividend / divisor) * 100;
     
}


console.log(`Your current health is at ${heal(25)}%`); //currentHealth = 60
console.log(`Your current health is ${currentHealth}`)

// stop when you reach the end at the Left

let xPos = 0;
let endPos = 5;
let startPos = 0

// if(keyPressed == "l" && xPos > startPos) {
//     xPos -= 1;
//     if(xPos == endPos) {
//         console.log("End of area move another direction.")
//     }
// }

// use a while loop find the enemy and end the game

endPos = 10;
startPos = 5;
let enemyPos = 8;
// Answer Code
isGameOver = false;



// My Code
while (startPos < endPos ) {
    startPos++;
    if(startPos === enemyPos) {
        console.log(`The game is over you hit the enemy at postion ${enemyPos}`);
        break;
    }
    
};

console.log(startPos);

// Answer Code
while (!isGameOver) {
    xPos++;
    if(xPos >= endPos || xPos == enemyPos) {
        isGameOver = true
    }
}

if(isGameOver == true) {
    console.log(`Your game is over`)
} else {
    console.log(`Your game is not over.`)
}











