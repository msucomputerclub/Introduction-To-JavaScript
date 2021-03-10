/*
  1. Setup new repl.it project
  2. Select Node.js as the programming language
  3. run command: "node <filename.js>"
  4. Good to go!
*/

// *******************************************************************

// First start off with "Hello World"
// write code here

console.log("hello world");

// I will be teaching JavaScript ES6 I will not be teaching anything prior

/*
  Similar to Python IMO.
  Has all familiar programming languge features:
    Their are comments, Data Types, Arithemtic Operators, String Concatenation, Properties, Methods, Built-in Objects, Variables  
*/

// *******************************************************************

// Let's get started with variables first
/*
  We used to do var but now we do let & const
*/
// start writin let variables
// start writing const variables

let meal1 = 'Chicken';
const meal2 = 'Chicken';
meal1 = 'pork';
console.log(meal1);

// a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get 

// *******************************************************************

/*
  Mathematical Assignment Operators
  Fairly standard just like most programming languages
*/
// do basic math operations
let w = 4;
w++;
console.log(w);

console.log(Math.floor(Math.random()*20));

// String Concatenation

let myPet = 'dog';
console.log('I own a pet ' + myPet + '.');

// String Interpolation
console.log(`I own a pet ${myPet}.`);


let name = 'Mark'
const myCity = 'Ocean';
console.log(`My name is ${name}. My favorite city is ${myCity}`);


// Typeof Operator

const unknown1 = 'foo';
console.log(typeof unknown1);

const unknown2 = 10;
console.log(typeof unknown2);

const unknown3 = true;
console.log(typeof unknown3);


// Conditional Statements

if(true){
  console.log("This message will print!");
}
// look into truthy falsy
if(5=="5"){
  console.log(5);
}
if(1 === 1){
  console.log("true");
}
else{
  console.log("false");
}

/*
  less than: <
  greater than: >
  less than or equal to: <=
  greater than or equal to: >=
  is equal to: ===
  not equal to: !==
*/

// *******************************************************************

// Functions

function greeting(name){
  console.log("Hello " + name);
}
greeting('Mark');

// Functions with Default parameters
function greeting(name = "stranger"){
  console.log("Hello " + name);
}
greeting();

// Function expression

const plantNeedsWater = function(day){
  if(day=== 'Wednesday')
   return true;
  else
   return false;
}
console.log(plantNeedsWater);
console.log(plantNeedsWater('Wednesday'));

// Arrow Functions

const plantNeedsWater = day => {
  if(day=== 'Wednesday')
   return true;
  else
   return false;
}
console.log(plantNeedsWater('Monday'));

// Concise body arrow Functions

const squareNum = (num) => {
  return num * num;
};

// is equivalent to ...

const squareNum = num => num * num;
console.log(squareNum(4));


// *******************************************************************

/*
  Rock Paper Scissors Game
*/

const getUserChoice = (userInput) => {
  if (userInput === 'rock')
    return userInput;
  else if (userInput === 'paper')
    return userInput;
  else if (userInput === 'scissors')
    return userInput;
  else
    console.log("error");

  userInput = userInput.toLowerCase();
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  // Math.random()*3 - 0, 1, 2
  if (randomNumber === 0)
    return 'rock';
  else if (randomNumber === 1)
    return 'paper';
  else if (randomNumber === 2)
    return "scissors";
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice)
    return 'tie!';

  // we can have a rock win, a paper win, or scissor win

  if (userChoice === 'rock') {
    if (computerChoice === 'paper')
      return "Computer wins!";
    else
      return 'You win!';
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors')
      return "Computer wins!";
    else
      return "You win!";
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock')
      return "Computer wins!";
    else
      return "You win!";
  }
}

console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

// Arrays

let names = ['Mark', 'David', 'Mike', 'Ashley', 'Amankwah', 'Karan'];
console.log(names[0]);
console.log(names[names.length-1]);

names[1] = 'Dr. Li';
console.log(names);
console.log(names.length);

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker);

itemTracker.pop();
console.log(itemTracker);

// For Loops
// loop through numbers 5 throught 10
for(let i = 5; i <= 10; i++){
 console.log(i);
}