// Assignment Code for Password Generator.

var generateBtn = document.querySelector("#generate");

// Function to write and select password to the #password input.

function writePassword() {
 
// Variables for Password

  var lowcaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = "!@#$%^&*()-_=+";

// Prompt user to choose if they want lower case, upper case, numeric, and/or special characters in their password.

  var charLength = parseInt(prompt ("Please enter a number between 8 to 128 for your desired password length."));

  If (charLength <8 || charLength > 128 || isNaN(charLength)) {
    alert("Start again. Please enter a number between 8 and 128 for your password length.");
    return "";
  }




  
}  
