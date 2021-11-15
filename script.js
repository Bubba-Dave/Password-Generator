// Assignment Code
// input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// special character values 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// numeric values
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// alphabetical values
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase conversion value
space = [];
// concatenation upon condition
var choices;
// alows letters to convert to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


// generate password function
function generatePassword() {
  
  // requires user input
  enter = parseInt(prompt("How long you want this to be? 8 min - 128 max"));
  
  // if user alert for empty submission 
  if (!enter) {
      alert("Can't have nothin'.....");
  } else if (enter < 8 || enter > 128) {
      
    // user options displayed
      enter = parseInt(prompt("Yo yo, you know this beast is gotta be between 8 and 128 characters!"));

  } else {
      confirmNumber = confirm("You wanna add numbers to this?");
      confirmCharacter = confirm("Thinkin' about special characters?");
      confirmUppercase = confirm("Does your pass need Uppercase letters?");
      confirmLowercase = confirm("Probably gunna have Lowercase letters right?");
  };
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
