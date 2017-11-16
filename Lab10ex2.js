//Asking for the users age
var age = prompt("What is your age?");

//Getting the current year
var date = new Date();
var year = date.getFullYear();

//Subtracting from the current year
var birthYear = year - age;

//Printing to the screen
document.write(birthYear);
