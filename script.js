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


//Function for generating password

function generatePassword(){

  //input for toggles
var lowerToggle = confirm(" Would you like to include lowercase letters?")
var upperToggle = confirm("Would you like to include uppercase letters?")
var numToggle = confirm("Would you like to include numbers?")
var specToggle = confirm("Would you like to include special characters?")
var randomFunc = [{lowerToggle},{upperToggle},{numToggle},{specToggle}]
console.log (randomFunc)
  //input for password length
var passwordLength
while(true){
  passwordLength = parseInt(prompt("Enter a length between 8 and 128 for your password"))
  if (passwordLength >= 8 && passwordLength <= 128){
    break;
  }
  alert("please select a number between 8 and 128");
}
//make an empty container for the password
let password = ""
//for loop to run through randomFunc and remove false statements
for (i=0; i < randomFunc.length; i++){
  if(randomFunc[i] === false){
    delete randomFunc[i]
  } else{
    
  }
}}