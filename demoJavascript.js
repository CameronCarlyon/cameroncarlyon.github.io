console.log("Our opening times are between 9 AM and 5 PM");
//checking if current time is between 9 AM and 5 PM
var currentTime = 800;
if (currentTime > 899 && currentTime < 1700)
  console.log("We are currently open!");
else console.log("We are currently closed.");

// Logical && operator
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10);

// Logical || operator
var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

//Modulus operator %
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// {let example = "sample text"}
// console.log(example)

var example = "sample text 1";
{
  let example = "sample text 2";
  console.log(example);
}
console.log(example);

// Where do you get your money from
var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if ((age < 65, age > 18)) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Do something");
    break;
  case "Tuesday":
    console.log("Do something");
    break;
  case "Wednesday":
    console.log("Do something");
    break;
  case "Thursday":
    console.log("Do something");
    break;
  case "Friday":
    console.log("Do something");
    break;
  case "Saturday":
    console.log("Do something");
    break;
  case "Sunday":
    console.log("Rest day");
    break;
  default:
    console.log("There is no such day");
}

// for and while loops
for (var number = 1; number <= 5; number++) {
  console.log(number);
}
console.log("For counting completed!");

for (number = 5; number >= 1; number--) {
  console.log(number);
}
console.log("For countdown finished!");

number = 1;
while (number <= 5) {
  console.log(number);
  number++;
}
console.log("While counting completed!");

number = 5;
while (number >= 1) {
  console.log(number);
  number--;
}
console.log("While countdown finished!");

var year = 2018;
while (year <= 2022) {
  console.log(year);
  year++;
}

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else console.log(i);
}

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}

// Functions, Objects and Arrays
function addTwoNums (a,b){
  var c = a + b
  console.log(c)
}
addTwoNums(20,40)

var liverpoolPlayers = ["0", "Alisson Becker", "Joe Gomez", "3", "Virgil Van Dijk", "Ibrahima Konte"]
console.log(liverpoolPlayers[5])

function letterFinder (word,match){
  for (var counter = 0; counter++; counter==word.length){
    if 
  }
}