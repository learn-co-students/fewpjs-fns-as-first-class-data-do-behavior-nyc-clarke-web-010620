/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string){
  let time = string.split(0,2)
  time = parseInt(time)

  if (time < 12){
    return "Good Morning"
  } else if (time >= 12 && time < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  let greeting = document.getElementById('greeting')
  greeting.innerText = string
}