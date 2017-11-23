//Make a new array for getColour
var colourArray = new Array();
colourArray = ["RED", "GREEN", "BLUE", "YELLOW"];

//The colour that we are generating
var colour="";

//A function to generate a colour randomly
function getColour(){

//Generate a random number between 0-3
  var colourNum = Math.round(Math.random()*3);

//Assign our generated colour Globally
colour=String(colourArray[colourNum]);

//Print out the colour to the text area output
  document.getElementById('output').innerHTML=String(colourArray[colourNum]);
//Clear the textarea 1 sec later
  setTimeout(function(){document.getElementById('output').innerHTML="";},1000);

}

function pushButton(userColour){

  if(colour == userColour){

document.getElementById('output').innerHTML="CORRECT!";
setTimeout(getColour(), 2000);

}
else{
  document.getElementById('output').innerHTML="GAME OVER!";
}

}
