// Assignment Code
var generateBtn = document.querySelector("#generate");

// GLOBAL VARIABLES
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialCaseChar = "~!@#$%^&*()_+";
var password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt the user to enter the length of password they would like. Turn the inputted number into a numeric value.
function generatePassword() {
  //parseInt will turn the string into a numeric value.
  var pwdLength = parseInt(
    prompt(
      "How long do you want your password to be? Enter a number from 8-128."
    )
  );
  // Alert the user if they enter a password length that is less than 8, greater than 128, or not a Number.
  console.log(pwdLength);
  // if it's not between 8-128, tell them that they have to start over. if it's not numeric tell them to start over
  //consolidated this code into one.
  if (pwdLength > 128 || pwdLength < 8 || isNaN(pwdLength)) {
    console.log(pwdLength);
    alert("Please enter a number 8-128!");
    return;
  }

  // Ask the user the series of questions to decide if they want lower case letters, upper case letters, numbers, and/or special characters in their password.
  var lowerCase = confirm(
    "Do you want to include lower case letters in your password?"
  );
  console.log(lowerCase);

  var upperCase = confirm(
    "Do you want to include Upper Case letters in your password?"
  );
  console.log(upperCase);

  var nuMeric = confirm(
    "Do you want to include numeric characters in your password?"
  );
  console.log(nuMeric);

  var specialChar = confirm(
    "Do you want to include special characters in your password?"
  );
  console.log(specialChar);

  // Alert if the user does not select any of the password character options.
  if (!lowerCase && !upperCase && !nuMeric && !specialChar) {
    alert("You have to pick something! Try again.");
    return;
  }

  // Creating the 'possible characters' array for the script to choose from based on which parameters the user selects.
  var possibleChar = "";

  if (lowerCase) {
    possibleChar = possibleChar + lowerCaseChar;
    [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  }

  //removed lower case letters
  if (upperCase) {
    possibleChar = possibleChar + upperCaseChar;
    [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  if (nuMeric) {
    possibleChar = possibleChar + numericChar;
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  }

  if (specialChar) {
    possibleChar = possibleChar + specialCaseChar;
    ["!", "&", "#", "+", "/", "-", "$", "@", "*", "%"];
  }

  console.log(possibleChar);

  console.log(possibleChar.length);

  console.log("Password Length", pwdLength);

  // to write the generatePassword function, create a for loop that while cycle through the 'possibleChar' string based on what the user selected. 

  for (var i = 0; i < parseInt(pwdLength); i++) {
    var randomChoice = Math.floor(Math.random() * possibleChar.length);
    console.log(randomChoice);
    //generate the password based on the possibleChar and the length of password the user initially inputted.
    var randomChar = possibleChar[randomChoice];
    console.log(randomChar);
    //concatenation of two variables together and saving back to password
    password = password + randomChar;
    console.log(password);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  //these are NOT global variables
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
