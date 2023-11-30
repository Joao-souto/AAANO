
const menuToggle = document.querySelector(".menuToggle");
const header = document.querySelector("header");

menuToggle.addEventListener("click", () => {
    header.classList.toggle('active');
});

const btn2 = document.querySelector("#btn2");
const ptRover = document.querySelector("#ptRover");

btn2.addEventListener("click", () => {
    ptRover.style.display = (ptRover.style.display === 'block') ? 'none' : 'block';
});