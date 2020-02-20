/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
let greet = function(string) {
  let time = parseInt(string.substr(0, 2));
  if (time < 12) {
    return "Good Morning"
  }
  else if (time >= 12 && time <= 17) {
    return "Good Afternoon"
  }
  else if (time >= 17) {
    return "Good Evening"
  }
  else {
    return string 
  }
}

let displayMessage = function(string) {
  let textbox = document.getElementById("greeting")
  textbox.innerText = greet(string)
}