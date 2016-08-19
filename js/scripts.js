
function countTo(number){
  var numArray = [];
  for(var i = 1; i <= number; i++){
    numArray.push(i);
  }
  return numArray;
}

function divByThree(number){
  if(number % 3 === 0){
    return true;
  } else {
    return false;
  }
}

function divByFive(number){
  if(number % 5 === 0){
    return true;
  } else {
    return false;
  }
}

function divByFifteen(number){
  if(number % 15 === 0){
    return true;
  } else {
    return false;
  }
}

function replaceThree(number){
  if(divByThree(number)){
    return "ping"
  } else {
    return number;
  }
}

function replaceFive(number){
  if(divByFive(number)){
    return "pong"
  } else {
    return number;
  }
}

function replaceFifteen(number){
  if(divByFifteen(number)){
    return "ping-pong"
  } else {
    return number;
  }
}

$(document).ready(function() {

});
