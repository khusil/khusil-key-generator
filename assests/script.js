var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S' , 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var characterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var characterCount = prompt('How many characters do you want between 8-128?');

  var result = [];
  var numbers = prompt('How many numbers?');
  var uppercase = prompt('How many uppercase?');
  var lowercase = prompt('How many lowercase?');
  var specialCharacters = prompt('How many special characters?');

  if (numbers) {
    result = result.concat(numberArray); 
  }
  if (uppercase) {
    result = result.concat(upperArray);
  }
  if (lowercase) {
    result = result.concat(lowerArray);
  }
  if (specialCharacters) {
    result = result.concat(characterArray);
  }
//check why characters are below 8 
// try coding so password is not less than 8 characters by default
  var password = '';
  for (let i = 0; i < characterCount; i++) {
    password += result[Math.floor(Math.random() * result.length)];
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
