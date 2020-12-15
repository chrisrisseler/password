var generateBtn = document.querySelector("#generate");

var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



function getCharacters() {
    var length = parseInt(
        prompt("How many characters would you like your password to be? This must be between 8 and 128.")
    );

    if (isNaN(length) === true) {
        alert("You must choose a number of characters for your password.");
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

    var hasLowercase = confirm("Press Ok for lower case characters in your password.");

    var hasUppercase = confirm("Press Ok for upper case characters in your password.");

    var hasSpecial = confirm("Press Ok for special characters in your password.");

    var hasNumbers = confirm("Press Ok for numerical characters in your password.");

    if (
        hasLowercase === false &&
        hasUppercase === false &&
        hasSpecial === false &&
        hasNumbers === false){
        alert("Must have at least one type of character in your password.");
        return;
    }


    var passwordCharacters = {
        length: length,
        hasLowercase: hasLowercase,
        hasUppercase: hasUppercase,
        hasNumbers: hasNumbers,
        hasSpecial: hasSpecial,
    };

    return passwordCharacters;

}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}


function writePassword(){
    var password = makePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


function makePassword(){
    const characters = getCharacters();
    var finalPassword = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];

    if(characters.hasLowercase){
        possibleCharacters = possibleCharacters.concat(letters);
        guaranteedCharacters.push(getRandom(letters));
    }

    if(characters.hasUppercase){
        possibleCharacters = possibleCharacters.concat(upperLetters);
        guaranteedCharacters.push(getRandom(upperLetters));
    }

    if(characters.hasNumbers){
        possibleCharacters = possibleCharacters.concat(numerals);
        guaranteedCharacters.push(getRandom(numerals));
    }

    if(characters.hasSpecial){
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }


    for (var i = 0; i < characters.length; i++){
        var possibleCharacter = getRandom(possibleCharacters);
        finalPassword.push(possibleCharacter);
    }

    for (var i = 0; i < guaranteedCharacters.length; i++){
        finalPassword[i] = guaranteedCharacters[i];
    }

    return finalPassword.join("")

}



   

    generateBtn.addEventListener("click", function(){

        writePassword();
    });