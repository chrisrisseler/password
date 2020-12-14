// Assignment Code
var generateBtn = document.querySelector("#generate");

var numerals = ["0","1","2","3","4","5","6","7","8","9"]
var specChar = ["!","@","#","$","%","^","&","*"]
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperLet = letters.toUpperCase()


// Write password to the #password input
var length = parseInt(
  prompt("How many characters would you like your password to be? This must be between 8 and 128."));

  if(isNaN(length)=== true) {
    alert("You must indicate a number of characters for your password");
    return;
  }
  if(length < 8){
    alert("Your password must be at least 8 characters long.");
    return;
  }
  if(length > 128){
    alert("Your password must be less than 128 characters long.");
    return;
  }

var hasLower = confirm("click OK to have lower case letters.");
var hasUpper = confirm("click OK to have upper case letters.");
var hasNum = confirm("click Ok to have numbers in your password.");
var hasSpec = confirm("click ok to have special characters in your password.");

if(hasLower === false &&
  hasUpper === false &&
  hasNum === false &&
  hasSpec === false){
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

function randChar(arr){
  var randIndex = Math.floor(Math.random()*arr.length);
  var randEl = arr[randIndex];
  return randEl;
}


function generatePassword() {
  var finalPass = [];
  var possiblePass= [];
  var possibleChar= [];
  var guaranteeChar = [];
  
  if(password.hasLower){
    possibleChar = possibleChar.concat(letters);
    guaranteeChar.push(randChar(letters));
  }
  if(password.hasUpper){
    possibleChar = possibleChar.concat(UpperLet);
    guaranteeChar.push(randChar(UpperLet));
  } if(password.hasNum){
    possibleChar = possibleChar.concat(numerals);
    guaranteeChar.push(randChar(numerals));
  } if(password.hasSpec){
    possibleChar = possibleChar.concat(specChar);
    guaranteeChar.push(randChar(specChar));
  }

  for (var i = 0; i< password.length;i++){
    var possibleChar = randChar(possibleChar);
    finalPass.push(possibleChar);
  }

  for (var i=0; i< guaranteeChar.length; i++){
    finalPass[i] = guaranteeChar[i];
  }

  return finalPass.join();


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
}





  passwordText.value = password;
  






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
