// Assignment Code
var generateBtn = document.querySelector("#generate");

var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperLet = letters.toUpperCase();
var upperLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function askQuestions() {
  // Write password to the #password input
  var length = parseInt(
    prompt("How many characters would you like your password to be? This must be between 8 and 128."));

  if (isNaN(length) === true) {
    alert("You must indicate a number of characters for your password");
    return;
  }

  if (length < 8) {
    alert("Your password must be at least 8 characters long.");
    return;
  }

  if (length > 128) {
    alert("Your password must be less than 128 characters long.");
    return;
  }

  var hasLower = confirm("Click OK to have lower case letters in your password.");
  var hasUpper = confirm("Click OK to have upper case letters in your password.");
  var hasNum = confirm("Click OK to have numbers in your password.");
  var hasSpec = confirm("Click OK to have special characters in your password.");

  if (hasLower === false &&
    hasUpper === false &&
    hasNum === false &&
    hasSpec === false) {
    alert("You must select at least one type of character");
    return;
  }

  var passChar = {
    length: length,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNum: hasNum,
    hasSpec: hasSpec,
  };

  return passChar;
}

function randChar(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randEl = arr[randIndex];
  return randEl;
}

function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  const answers = askQuestions();
  var finalPass = [];
  // var possiblePass= [];
  var possibleChar = [];
  var guaranteeChar = [];

  console.log(answers)

  if (answers.hasLower) {
    possibleChar.push(letters);
    guaranteeChar.push(randChar(letters));
  }
  if (answers.hasUpper) {
    possibleChar.push(upperLet);
    guaranteeChar.push(randChar(upperLet));
  }
  if (answers.hasNum) {
    possibleChar.push(numerals);
    guaranteeChar.push(randChar(numerals));
  }
  if (answers.hasSpec) {
    possibleChar.push(specChar);
    guaranteeChar.push(randChar(specChar));
  }

  // console.log(guaranteeChar)
  for (var i = 0; i < answers.length; i++) {
    possibleChar = randChar(possibleChar);
    finalPass.push(possibleChar);
    console.log(possibleChar)
  }



  // console.log(finalPass)
  for (var i = 0; i < guaranteeChar.length; i++) {
    finalPass[i] = guaranteeChar[i];
  }
  // console.log(finalPass)

  return finalPass.join("");
}



// Add event listener to generate button
generateBtn.addEventListener("click", function () {

  writePassword();
});
