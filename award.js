// selecting the elements
let badges = document.querySelectorAll(".badges")
let badgeP = document.querySelectorAll(".badgeP")
let badgesPContent = ["Completing 3 lessons in one day", "Getting all the quizzes correct in a lesson", "You found me!", "You work hard!", "You didn't lose your 1st place", "3x points bonus"]

// using for loop to change the property of the element based on user input/action
for (let i = 0; i < badges.length; i++) {
  badges[i].addEventListener("mouseover", function() {
    badgeP[i].textContent = badgesPContent[i]
  })

  badges[i].addEventListener("mouseout", function() {
    badgeP[i].textContent = " "
  })
}

let personalTxt = document.querySelector("#personalTxt")

personalTxt.addEventListener("mouseover", function (){
  personalTxt.style.color = "#ffc107"
})
personalTxt.addEventListener("mouseout", function(){
  personalTxt.style.color = "black"
})