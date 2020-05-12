// tutaj rozwiązanie
const start = document.querySelector("button");
const lista = document.querySelectorAll("li");

const showList = function () {
    lista.forEach(item => {
        item.style.display = "block";
    });
}
let scale = 0;
const enlargeElements = function () {
    scale += 2;
    lista.forEach(item => {
        //let fSize = item.getAttribute("fontSize");
        item.style.fontSize = scale + "px";
    });
}

start.addEventListener("click", () => {
    showList();
    enlargeElements();
});