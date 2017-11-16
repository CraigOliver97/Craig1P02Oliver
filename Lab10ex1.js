//The starting time
var start = new Date();
var startMilli = start.getTime();

function stopTime(){

  //The time when we press the button
  var end = new Date();
  var endMilli = end.getTime();

  var diffMilli = endMilli - startMilli;

  //Converted the difference to seconds
  var diffSec = diffMilli/1000;


//Aler the user with a popup
  alert ("The number of seconds is: " +  diffSec);

}
