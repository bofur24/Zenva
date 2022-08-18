// ** Variables **

// let name = value;


const maxHealth = 100;
let currentHealth = 50.5;
currentHealth = maxHealth;
let iisGameOver = false;
isGameOver = true;

// const variables that cannot change values once assigned use were available
// let can only be accessed within the scope or block in which it's declared
// var can be accessed globally


if (true) {
    var isGameOver = false;
    let isNotGameOver = true;
}   

console.log(isGameOver) 
//console.log(isNotGameOver) is not defined

// ** String Variables **

let characterName = "Keith";
characterName = "Zenva";
let age = 36;
let length = characterName.length;
let upperName = characterName.toUpperCase();
let lowerName = characterName.toLowerCase();
let message = `Hi, my name is ${characterName} and my age is ${age}`;  
let zen = characterName.slice(0, 3);
let health = 50;


// ** Operators **


// + - * / % **

health = health + 10; // return 60
health = health % 50; // return 10 
// health % 2 == 0; // return True
health = health ** 2; // 100

// +=, -=, *=, /=

health -= 20; // health = health - 20

// ++ --

health++ // health + 1
health-- // health - 1

health = (health * 2) + (health / 5);

// > >= < <= == !=

let number1 = 5;
let number2 = 10

let result = number1 > number2; // false
result = number1 == number2; // false
result = number1 != number2; // true

// || && !

result = !result; // false


result = number1 > number2 && number1 < number2; // both must be true to return ture.

result = number1 > number2 || number1 < number2; // one must be true to return ture


// ? :


result = number1 > number2 ? number1 : number2; // ture on the left of the : false on the right of the :


console.log(message);
console.log(upperName);
console.log(lowerName);
console.log(zen);

// ** Arrays **

let inventory = ["Shirt", "Axe", "Bread"];
// inventory = ["Water", "Pants"]; can change the array like any variable
console.log(inventory);

let shirt = inventory[0]; // if no idex item will call an error
inventory[2] = "Cheese"; // idex 2 has now become cheese
console.log(inventory);

let indexLength = inventory.length; // total items 3
console.log(indexLength);
indexLength = inventory[0].length; // shirt has 5 char
console.log(indexLength);

inventory.push("water"); // push water to the end of the array
let water = inventory.pop() // removes item at the end and returns it

console.log(inventory) 

console.log(water)

currentHealth = 50.5;
currentHealth = maxHealth;


isGameOver = true;

/* *** Functions *** */


/*function name () {
    function body
}
*/
currentHealth = 50;

function heal(healAmount = 10) {
    let newHealth =  currentHealth += healAmount;
    currentHealth = newHealth > 100 ? maxHealth : newHealth;
    return (currentHealth / maxHealth) * 100;

}

console.log(heal(10)); //currentHealth = 60
console.log(`Your current health is ${currentHealth}`)

function healthPer() {
    return (currentHealth / maxHealth) * 100;
}


console.log(healthPer());

/* If Statements */

let keyPressed = "l";
let xPos = 0;
const endPos = 5;
let pos = 0;
let enemyPos = 6



if (keyPressed == "l") {
    xPos -= 1; // xPos = -1

} else if (keyPressed == "r"){
    xPos += 1; 
} else {
    xPos = 0;
}


if(keyPressed == "r" && xPos < endPos) {
    xPos += 1;
}

if(keyPressed == "r") {

    if(xPos < endPos) {
        xPos +=1;
    }
}


while (pos < endPos) {
    pos++;
}


while (xPos < endPos) {
    xPos++;
    if (xPos == enemyPos) {
        break; // breaks out of the loop when this code is ran
    }
}


// skip every odd number with continue

while (xPos < endPos) {
    if (xPos %2 == 1) {
        xPos += 2;
        continue; // skip the bottom code when it is odd.
    }
    xPos++;
    if (xPos == enemyPos) {
        break;
    }
}


function doSomething(someNum) {
    let a = 5;
    let result = a + someNum;
    return result;
    a += 10; // code will not be run becasue of the return statement
};

// for loops

let items = ["Axe", "Shirt", "Knife"];
let finalString = "In my inventory, I have "

for(let i = 0; i < items.length; i++) {
    let itemName = items[i];
    finalString += itemName + " ";
}

console.log(finalString);

items.forEach(function(element) {
    finalString += element + " ";
});

console.log(finalString)

let gameCharacter = { //keys are properties of gameCharacter

    name: "Keith",
    class: "Human",
    health: 100,
    get title() { // getters
        return this.name + " the " + this.class
    },
    set maxHealth(h) { //setter
        return this.health = h;
    },
    xPos: 0,
    items: ["Knife", "Food"], // key and values
    move: function(x) {
        this.xPos += x; //this refers to the gameCharacter property xPos with in "this" object
    }

};

let name = gameCharacter.name; // set the gameCharcter object name to the varable name
gameCharacter.items = ["Axe", "Bread"] // items changed to these new items.
gameCharacter.move(5);
let x = gameCharacter.xPos;

gameCharacter.yPos = 0; // added to the gameCharacter as a new property
gameCharacter.move = function(x,y) { //creating a new function with yPos
    this.xPos += x;
    this.yPos += y;
}

console.log(gameCharacter.title);
console.log(gameCharacter.maxHealth) //undefined

// constructor function to crate objects

function gameCharacter1(name, xPos, health) {
    this.name = name;
    this.xPos = xPos;
    this.health = health;
    this.move = function(x) {
        this.xPos += x;
    }

}


let gc1 = new gameCharacter1("Link", 0, 100) //creating a new instance of gc1
let gc2 = new gameCharacter1("Zelda", 1, 100 )

console.log(gc1);
console.log(gc2);

//prototypes
gc1.yPos = 5;
gc2.yPos; // undefined reference error

gameCharacter1.prototype.class = "Human";

console.log(gc1);

let heal5 = function(amount) {
    this.health += amount;
}

gameCharacter1.prototype.heal = heal;

console.log(gc1.heal(10))


// Classes

class gameCharacter2 {
    constructor(name, xPos, health) {
        this.name = name;
        this.xPos = xPos;
        this.health = health;

        }
        move(x) {
            this.xPos += x;
        }
}


class humanCharacter extends gameCharacter2 {
    constructor(name, xPos, health) {
        super(name, xPos, health);
        this.classification = "Human";
    }
}



let gc3 = new gameCharacter2("Keith", 0, 100);

console.log(gc3.move(5));
console.log(gc3.name);

let h1 = new humanCharacter("Zenva", 0, 150);

console.log(h1.health)
