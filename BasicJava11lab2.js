var adjArray = new Array();
adjArray = ["Ugly", "Stupid", "Sheepish", "Cute", "Gleeful"];

var nounArray = new Array();
nounArray = ["Idiot", "Creature", "Moron", "Puppy", "Craig"];

function getSent(){

var adjNum = Math.round(Math.random()*4);

var nounNum = Math.round(Math.random()*4);

document.getElementById('output').innerHTML=String(adjArray[adjNum]  +  nounArray[nounNum]);

}
