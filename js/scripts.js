
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

function replaceArray(numArray){
  numArray.forEach(function(element, index){
    numArray[index] = replaceFifteen(numArray[index]);
    numArray[index] = replaceFive(numArray[index]);
    numArray[index] = replaceThree(numArray[index]);
  });
  return numArray;
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#numInput").val();
    var inputArray = countTo(input);
    replaceArray(inputArray);
    $("#results ul").text("");
    inputArray.forEach(function(element){
      $("#results ul").append("<li>" + element + "</li>")
    });
  });
});
