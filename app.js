//assign elements
const buttonOpenPopup = document.querySelector(".button-add")
const buttonClosePopup = document.querySelector(".popup__close")
const popUp = document.querySelector(".popup")
const container = document.querySelector(".container")



buttonOpenPopup.onclick = () => {
  popUp.classList.remove("invisible")
  container.classList.add("blur")
}
buttonClosePopup.onclick = () => {
  popUp.classList.add("invisible")
  container.classList.remove("blur")
}