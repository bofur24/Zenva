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

let characterName = "Keith";
characterName = "Zenva";
let age = 36;
let length = characterName.length;
let upperName = characterName.toUpperCase();
let lowerName = characterName.toLowerCase();

let message = `Hi, my name is ${characterName} and my age is ${age}`;  
let zen = characterName.slice(0, 3);

let health = 50;


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

result = numnber1 > number2 || number1 < number2; // one must be true to return ture


// ? :


result = number1 > number2 ? number1 : number2; // ture on the left of the : false on the right of the :


console.log(message);
console.log(upperName);
console.log(lowerName);
console.log(zen);
