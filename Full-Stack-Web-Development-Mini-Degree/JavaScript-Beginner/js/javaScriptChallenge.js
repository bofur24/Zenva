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


console.log(`Your current healt is at ${heal(25)}%`); //currentHealth = 60
console.log(`Your current health is ${currentHealth}`)








