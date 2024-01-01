const buttonOpenPopup = document.querySelector(".button-add")
const buttonClosePopup = document.querySelector(".popup__close")
const popUp = document.querySelector(".popup")
const container = document.querySelector(".container")
const listPopup = document.querySelectorAll(".list__element-popup")


alert("hello")
buttonOpenPopup.onclick = () => {
  popUp.classList.remove("invisible")
  container.classList.add("blur")
}
buttonClosePopup.onclick = () => {
  popUp.classList.add("invisible")
  container.classList.remove("blur")
}

listPopup.forEach((button, index) => {
  button.addEventListener("click", function() {
    console.log("You clicked button number " + index);
    console.log("You clicked button with class " + this.className);
    console.log("You clicked button with text " + this.innerText);
  })
})