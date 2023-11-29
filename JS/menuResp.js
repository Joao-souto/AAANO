const menuToggle = document.querySelector(".menuToggle");
const header = document.querySelector("header");

menuToggle.addEventListener("click", ()=>{
    header.classList.toggle('active')
})