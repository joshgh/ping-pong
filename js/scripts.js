// Business logic
function countTo(number){
  var numArray = [];
  for(var i = 1; i <= number; i++){
    numArray.push(i);
  }
  return numArray;
}

function replaceThree(number){
  if (number % 3 === 0) {
    return "ping";
  } else {
    return number;
  }
}

function replaceFive(number){
  if (number % 5 === 0) {
    return "pong";
  } else {
    return number;
  }
}

function replaceFifteen(number){
  if (number % 15 === 0) {
    return "ping-pong";
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

//User Interface logic
$(document).ready(function() {
  $("#exampleCssOn").click(function(){
    $("div").removeClass("container");
    $("body, div").removeClass("mine");
    $("body, div").addClass("example");
  });

  $("#exampleCssOff").click(function(){
    $("div").addClass("container");
    $("body, div").removeClass("example");
    $("body, div").addClass("mine");
  });

  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#numInput").val();
    var inputArray = countTo(input);
    replaceArray(inputArray);
    $("ul#results").text("");
    inputArray.forEach(function(element){
      $("ul#results").append("<li>" + element + "</li>")
    });
  });
});
