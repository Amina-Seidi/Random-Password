// This is a password generator that will generate a password between 8 and 128 characters

// When the button is clicked, a password is generated
var generateBtn = document.querySelector("#generate"); 

// Character type variables
var number = "0123456789";
var specialChar = "!#$%&,*+-./:;=<>?@~";
var lowerChar ="abcdefghijklmnopqrstuvwxyz";
var upperChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  
function generatePassword (){
  // Variable Initialization
  var confirmLength;
  var confirmNumeric;
  var confirmSpecial;
  var confirmLowerCase;
  var confirmUpperCase;
  var char = "";

  var confirmLength = (prompt("How many characters would you like your password to have?"));

    if(confirmLength <=7 || confirmLength >=129){
      alert("Password must between 8-128 characters.");
      var confirmLength = (prompt("How many characters would you like your password to have?"));
  }
    alert(`Your password will have ${confirmLength} characters`);

// Series of prompts for password criteria
var confirmNumeric = confirm("Click OK to include numbers in your password");
var confirmSpecial = confirm("Click OK to include special characters in your password");
var confirmLowerCase = confirm("Click OK to include lowercase letters in your password");
var confirmUpperCase = confirm("Click OK to include uppercase letters in your password");

// Loop if answer is outside the parameters 
while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecial === false && confirmNumeric === false) {
  alert("You must choose at least one parameter");
  var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters");    
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
}

if(confirmUpperCase) {
  char += upperChar;
}
if (confirmLowerCase) {
  char += lowerChar;
}
if (confirmNumeric) {
  char += number;
}
if (confirmSpecial) {
  char += specialChar;
}
return randomPassword (confirmLength, char);

} 

// Password is generated
function randomPassword (confirmLength, char){
  var password = "";
  for (i = 0; i < confirmLength; i++) {
     password += char[Math.floor(Math.random() * (char.length))]
  }
  return password;

}

// Write password to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





