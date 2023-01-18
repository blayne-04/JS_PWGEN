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
//boolean value storage

var lowerToggle;
var upperToggle;
var numToggle;
var specToggle;
var passwordLength;

//User prompts

lowerToggle = confirm(" Would you like to include lowercase letters?"  )
upperToggle = confirm("Would you like to include uppercase letters?")
numToggle = confirm("Would you like to include numbers?")
specToggle = confirm("Would you like to include special characters?")

//Length prompt that only accepts 8-128

while(true){
  passwordLength = parseInt(prompt("Enter a length between 8 and 128 for your password"))
  if (passwordLength >= 8 && passwordLength <= 128){
    break;
  }
  alert("please select a number between 8 and 128");
}

//functions for fetching random characters

function randomLower(){
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

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

var randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSymbol,
}

//Function for generating password

function generatePassword(lower, upper, number, symbol, passwordLength){

}