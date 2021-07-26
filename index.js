let menu = document.querySelector(".bar")
let  option = document.querySelector("body")
let main = document.querySelector("main")

menu.addEventListener("click", () => {
    option.classList.toggle("active")
   
})
main.addEventListener("click", () => {
    option.classList.remove("active")
})