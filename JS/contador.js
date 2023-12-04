
let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");
let form3 = document.querySelector(".form3");
let form4 = document.querySelector(".form4");

let i = 0;

setInterval(() => {
    i = i+10;

    if (i < 26) {
        form1.innerHTML = `+${i+5}`;
    }

    if (i < 8001) {
        form2.innerHTML = `+${i}`;
    }

    if (i < 2001) {
        form3.innerHTML = `+${i}`;
    }

    if (i < 6001) {
        form4.innerHTML = `+${i}`;
    }
}, 1);