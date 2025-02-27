// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// WE make a variable called 'name' and set it to 'Dane'; its a string so its given quotations ,''.
// We check for conditional if variable 'name' with a === sign for an exact match for variable 'Mary'.
//if true, console.log should read, 'Hi, mary' but if false, the conditional will run else and read, 'how do you do?'
//We console.log 'How do you do?' since variable 'Dane' does not match 'Mary'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'secret'. We also make and namne another variable 'code' with a value of 123;
// we create a conditional to check if variable 'code' is an exact match for 123; we assign secret to the value of 'super'.
// then we update variable code to equal code or '123' and multipy by 2 (code * 2) which equals 246.
// check conditional if code '246' is greater than 250; then secret equals duper. we console.log super which should return 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we make multiple variables each with values let isStudent = true; let age = 34; and let zip = 55407;
// make a combo conditional with "&&to check if 'isStudent' is a west coast student. since zip is not greater than 8000, conditional
// goes to else if. second else if combo conditional  isstudent doesnt equal 'false', and age is lesser than 30 then condtional goes to second else if;
// second to last else if equals true, so we console.log (welcome to prime)

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//lets reassign variables according to description
// since the variable is incorrect according to the description.
// should be let colorOne = 'blue' and colorTwo = 'red'.
let purple = (colorOne +colorTwo)

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//We can rewrite code to read  if (temp > 39 && time >= 4) since the DESCRIPTION
//is asking for both the temp to be greater than and the time to be greater
//or equal.
//INSTEAD:
if (temp > 39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

//notes: lets swap the console.log entries so that if(minAge <= age) is true,
//console.log ('enter') and else { 'no entry'}.

/*
let age = 21;
const minAge = 21;
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
