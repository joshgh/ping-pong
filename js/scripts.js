
function countTo(number){
  var numArray = [];
  for(var i = 1; i <= number; i++){
    numArray.push(i);
  }
  return numArray;
}

function replaceThree(number){
  if(number % 3 === 0){
    return "ping"
  } else {
    return number;
  }
}

function replaceFive(number){
  if(number % 5 === 0){
    return "pong"
  } else {
    return number;
  }
}

function replaceFifteen(number){
  if(number % 15 === 0){
    return "ping-pong"
  } else {
    return number;
  }
}

function replaceArray(inputArray){
  inputArray.forEach(function(element, index){
    inputArray[index] = replaceFifteen(inputArray[index]);
    inputArray[index] = replaceFive(inputArray[index]);
    inputArray[index] = replaceThree(inputArray[index]);
  });
  return inputArray;
}

$(document).ready(function() {

});
