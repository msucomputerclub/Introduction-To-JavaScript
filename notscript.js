/*
  1. Setup new repl.it project
  2. Select Node.js as the programming language
  3. run command: "node <filename.js>"
  4. Good to go!
*/
// First start off with "Hello World"
console.log("Hello World");
// I will be teaching JavaScript ES6 I will not be teaching anything prior

// *******************************************************************

/*
  Similar to Python IMO.
  Has all familiar programming languge features:
    Their are comments, Data Types, Arithemtic Operators, String Concatenation, Properties, Methods, Built-in Objects, Variables  
*/

// Let's get started with variables first
/*
  We used to do var but now we do let & const
*/
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

// a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError

const myName = 'Mark';
console.log(myName); // Output: Gilberto
//myName = 'Matt'; // will throw error
//console.log(myName);

// *******************************************************************

// Mathematical Assignment Operators

/*
  Fairly standard just like most programming languages
*/

let w = 4;
w = w + 1;
 
console.log(w); // Output: 5

w = 4;
w += 1;
 
console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

// *******************************************************************

// String Concatenation

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

// String Interpolation, uses backtick
myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

const name = 'Mark';

const myCity = 'Oakhurst';

console.log(`My name is ${name}. My favorite city is ${myCity}`);

// *******************************************************************

// Typeof Operator

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

// *******************************************************************

// If statements


if (true) {

console.log('This message will print!');

} 

// Prints: This message will print!`
/*
Really similar to if statements in all the other languages. Don't think I need to note these down.

- Less than: `<`
- Greater than: `>`
- Less than or equal to: `<=`
- Greater than or equal to: `>=`
- **Is equal to: `===`**
- **Is not equal to: `!==`**
*/
if (1===1) {
console.log('This message will print!');
}
else{
  console.log("This message will not print!");
}

// *******************************************************************

// Functions

// Functions with Default parameters
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

// Function expression

const plantNeedsWater = function(day, plantNeedsWater){
if(day === 'Wednesday')
  return true;
else
  return false;
}

// Arrow Functions
const plantNeedsWater = day => {
if (day === 'Wednesday') {
  return true;
} 
else {
  return false;
 }
};

// Concise body arrow Functions
const squareNum = (num) => {
  return num * num;
};
// is equivalent to ...
const squareNum = num => num * num;

/*
  Rock Paper Scissors Game
*/

const getUserChoice = (userInput) =>{

if(userInput === 'rock')
  return userInput;
else if(userInput === 'paper')
  return userInput;
else if(userInput === 'scissors')
  return userInput;
else if(userInput === 'bomb')
  return userInput;
else
  console.log('Error!');

userInput = userInput.toLowerCase();
}

//console.log(getUserChoice('paper'));

const getComputerChoice = () => {

let randomNumber = Math.floor(Math.random() * 3);

if(randomNumber===0)
  return 'rock';
else if(randomNumber===1)
  return 'paper';
else if(randomNumber===2)
  return 'scissors';
}

const determineWinner = (userChoice, computerChoice) => {

if(userChoice===computerChoice)
  return 'tie';
if(userChoice==='bomb')
  return 'You win!';

if(userChoice==='rock'){

if(computerChoice==='paper')
  return 'Computer wins!';
else
  return 'You win!'

}

if(userChoice==='paper'){

if(computerChoice==='scissors')
  return 'Computer wins!';
else
  return 'You win!'

}

if(userChoice==='scissors'){

if(computerChoice==='rock')
  return 'Computer wins!';
else
  return 'You win!'
}

}

//console.log(determineWinner('scissors','rock'));

const playGame = () => {

const userChoice = getUserChoice('bomb');

const computerChoice = getComputerChoice('rock');

console.log(userChoice);

console.log(computerChoice);

console.log(determineWinner(userChoice, computerChoice));

}
playGame();

// Arrays
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

const hello = 'Hello World';
console.log(hello[6]);
// Output: W

// updating array values
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons);
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

// the push method
console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// the pop method

// For Loops
// Create a program that loops from 5 to 10 and logs each number to the console.
for(let i = 5; i <= 10; i++){
	console.log(i);
}