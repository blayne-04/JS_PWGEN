// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//functions for fetching random characters
function randomLower(){
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

function randomUpper(){
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upper[Math.floor(Math.random() * upper.length)]
}

function randomNumber(){
  const numbers = '0123456789'
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function randomSymbol() {
  const symbols = '!!@#$%^&*(){}[]/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
