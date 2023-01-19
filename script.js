// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", writePassword)

//Function for generating password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;
}

//function for generating password 
function generatePassword(){
  
//makes an empty string for options
var options = ''

//input for toggles, adds respective strings to options when user selects true
var lowerToggle = confirm(" Would you like to include lowercase letters?") 
if (lowerToggle === true){
  options += 'abcdefghijklmnopqrstuvwxyz'
}
var upperToggle = confirm("Would you like to include uppercase letters?")
if(upperToggle === true){
  options += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}
var numToggle = confirm("Would you like to include numbers?")
if(numToggle === true){
  options += '0123456789'
}
var specToggle = confirm("Would you like to include special characters?")
if(specToggle === true){
  options += '!!@#$%^&*(){}[]/,.'
}

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
let password = ''

//function that takes all the inputs from the toggle statements and randomly selects from the included characters while adding to the empty password string
function passwordGen(){
  for(i = 0; i<passwordLength; i++)
password += options[Math.floor(Math.random() * options.length)];
}
//calls passwordGen
passwordGen()
//sets the return value for the function "generatePassword" to "password" 
return (password)
}

