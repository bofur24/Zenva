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