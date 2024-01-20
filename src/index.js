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



const listPriorityRadio = document.querySelector(".priority")
let priorityColor =  rootStyles.getPropertyValue('--background-color-priority')

alert(1)
listPriorityRadio.forEach((element, index) => {
  element.addEventListener("click", function() {
    listPriorityRadio.forEach((element, index) => {
      if(element.classList.contains("priority-chosen")){
        element.classList.remove("priority-chosen")
      }
    })
    this.style.setProperty("--background-color-priority", "red")
    this.classList.add("priority-chosen")
  })
})