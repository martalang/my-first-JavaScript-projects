const btn = document.querySelector('button');
const dv = document.querySelector('div');

let cntr = 0;

const incrementCounter = function () {
    ++cntr;
    let counterElement = document.createElement('div');
    counterElement.textContent = cntr;
    counterElement.className = "clearfix";
    if (cntr % 5 == 0) {
        counterElement.classList.toggle("round");
    };
    dv.appendChild(counterElement);
}

btn.addEventListener("click", incrementCounter)