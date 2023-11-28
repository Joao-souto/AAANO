const btn = document.querySelector("#btn");
const btnF = document.querySelector("#btnF")
const esconde = document.querySelector(".esconde");
const center = document.querySelector(".center")

btn.addEventListener("click", () => {
    esconde.style.display = "block";
    center.style.display = "none";
});

btnF.addEventListener("click", () => {
    esconde.style.display = "none";
    center.style.display = "block";
});