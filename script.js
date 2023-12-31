// Assignment Code for Password Generator.

var generateBtn = document.querySelector("#generate");

// Function to write and select password to the #password input.

function writePassword() {
 
// Variables for Password

  var lowcaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = "!@#$%^&*()-_=+";
  var chosenChar = "";

// Prompt user to choose if they want lower case, upper case, numeric, and/or special characters in their password.

  var charLength = parseInt(prompt("Please enter a number between 8 to 128 for your desired password length."));

  if (charLength <8 || charLength > 128 || isNaN(charLength)) {
    alert("Start again. Please enter a number between 8 and 128 for your password length.");
    return "";

  }

/* Prompt user for Password Character preferences with if conditional statements which will then concatenate
   the user's choice to chosenChar string and store it for the generating password process. */

  if (confirm("Do you want to include lowercase letters in your password? Please select OK for YES or CANCEL for NO.")) {
    chosenChar += lowcaseChar;

  }

  if (confirm("Do you want to include uppercase letters in your password? Please select OK for YES or CANCEL for NO.")) {
    chosenChar += uppercaseChar;
    
  }

  if (confirm("Do you want to include numbers in your password? Please select OK for YES or CANCEL for NO.")) {
    chosenChar += numericChar;
    
  }

  if (confirm("Do you want to include special characters (symbols) in your password? Please select OK for YES or CANCEL for NO.")) {
    chosenChar += specialChar;
  
  }

// If condition and alert function to check if variable chosenChar is empty, or user selected characters to generate the password.

  if (chosenChar === "") {
    alert("You must select a character type to generate a password. Please start again.");
    return "";
    
  }

// For loop repeats until criteria met, and Math.floor and Math.random to generate random password.

  var password = "";
  
  for (var i = 0; i < charLength; i++) {
    var randomIndex = Math.floor(Math.random() * chosenChar.length);
    password += chosenChar[randomIndex];

  }

  return password;

}  

/* Upon user's click on Generate Password Button, functions to generate password executed, and the random value 
based on user's choice of characters will display. */

  generateBtn.addEventListener("click", function() {
    var password = writePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  });
