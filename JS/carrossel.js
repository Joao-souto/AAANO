const radio = document.querySelector(".manual-btn");
let i = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    i++;

    if (i > 3) {
        i = 1;
    }

    document.getElementById(`radio${i}`).checked = true;
}   