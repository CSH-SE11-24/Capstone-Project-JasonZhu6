// selecting the text
let dashTxt = document.querySelector("#dashTxt")

// changing the text color based on user input
dashTxt.addEventListener("mouseover", function(){
  dashTxt.style.color = "#ffc107"
})
dashTxt.addEventListener("mouseout", function(){
  dashTxt.style.color = "black"
})