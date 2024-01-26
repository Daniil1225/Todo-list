const buttonOpenPopup = document.querySelector(".button-add")
const buttonClosePopup = document.querySelector(".popup__close")
const popUp = document.querySelector(".popup")
const hideDiv = document.querySelector(".hide")
const container = document.querySelector(".container")

//Open popup
buttonOpenPopup.onclick = () => {
  popUp.classList.remove("invisible")
  hideDiv.classList.remove("invisible")
  container.classList.add("blur")
}
//Close popup
buttonClosePopup.onclick = () => {
  popUp.classList.add("invisible")
  hideDiv.classList.add("invisible")
  container.classList.remove("blur")
}



const listNavbarMain = document.querySelectorAll(".list__element")
const listNavbarPopup = document.querySelectorAll(".list__element-popup")

//Check if main navbar element was clicked. Add click animation.
listNavbarMain.forEach((element, index) => {
  element.addEventListener("click", function() {
    listNavbarMain.forEach((element, index) => {
      if(element.classList.contains("chosen") && !this.classList.contains("projects")){
        element.classList.remove("chosen")
      }
    })
    if(element.classList.contains("projects") == false){
      this.classList.add("chosen")
    }
  })
})
//Check if popup navbar element was clicked. Add click animation.
listNavbarPopup.forEach((element, index) => {
  element.addEventListener("click", function() {
    listNavbarPopup.forEach((element, index) => {
      if(element.classList.contains("chosen")){
        element.classList.remove("chosen")
      }
    })
    this.classList.add("chosen")
  })
})



const listPriorityRadio = document.querySelectorAll(".priority-label")
const root = document.querySelector(':root')
let chosenPriority;

//Changing radio background color on click 
listPriorityRadio.forEach((element, index) => {
  element.addEventListener("click", function() {
    listPriorityRadio.forEach((element, index) => {
      if(element.classList.contains("priority-chosen")){
        element.classList.remove("priority-chosen")
      }
      
    })
    switch(this.getAttribute("for")){
      case "easy":
        this.style.setProperty("--background-color-priority", "#008000")
        chosenPriority = easy;
      break
      case "medium":
        this.style.setProperty("--background-color-priority", "#ffa500")
        chosenPriority = medium;
        break
      case "high":
        this.style.setProperty("--background-color-priority", "#ff0000")
        chosenPriority = high;
        break
        
    }
    this.classList.add("priority-chosen")
  })
})



const formToDo = document.querySelector("#form-ToDo")
//If page is new set "indexToDo" to 1
if(sessionStorage.getItem("reloaded") != "true" && localStorage.getItem("closed") != "true"){
  localStorage.setItem("indexToDo", "1")
}
//If tab was closed set variable "closed" to true
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  this.localStorage.setItem("closed", "true")
  return true;
});

//Check when form was submitted
formToDo.addEventListener("submit", function(e){
  e.preventDefault()

  const payload = [...new FormData(formToDo)]

  
  function CreateToDo(){
    this.title = payload[0][1]
    this.description = payload[1][1]
    this.date = payload[2][1]
    this.priority = payload[3][1]
  }
  let todo = new CreateToDo()
  localStorage.setItem(`todo${Number(localStorage.getItem("indexToDo"))}`, JSON.stringify(todo))
  let indexToDo = Number(localStorage.getItem("indexToDo"))+1
  localStorage.setItem("indexToDo", indexToDo.toString())
  location.reload()
  sessionStorage.setItem("reloaded", "true")
})



