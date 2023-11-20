let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    proximaImg()
}, 7000)

function proximaImg() {
    count++;
    if (count > 3) {
        count = 1
    }
    document.getElementById("radio"+count).checked = true;

}