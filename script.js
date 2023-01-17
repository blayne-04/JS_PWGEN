// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//functions for fetching random characters
function randomLower(){
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}
console.log(randomLower())
function randomUpper(){
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upper[Math.floor(Math.random() * upper.length)]
}

function randomNumber(){
  var numbers = '0123456789'
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function randomSymbol() {
  var symbols = '!!@#$%^&*(){}[]/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// object for storing bool values
var randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
}