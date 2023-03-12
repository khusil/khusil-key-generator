
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S' , 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var characterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',];
  var charactercount = promt ('how many characters you want between 8-128?');

  var result = [];
  var user = [];
  var numbers = prompt ('how many numbers?');
  var uppercase = prompt ('how many uppercase?');
  var lowercase = prompt ('how many lowercase?');
  var specialCharacters = prompt ('how many special characters?');
  if (numbers){
    result = result.concat(numberArray); 
  }
  if (uppercase){
    result = result.concat(upperArray);
  }
  if (lowercase){
    result = result.concat(lowerArray);
  }
  if (characterArray){
    result = result.concat(characterArray);
  }
  
   
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
