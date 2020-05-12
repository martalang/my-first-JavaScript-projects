const square = document.querySelector("div");

let scale = 0;
let grow = true;
const resizeElement = function () {
    switch (grow) {
        case true:
            scale += 5;
            break;
        case false:
            scale -= 5;
            break;
    }

    square.style.width = scale + "px";
    square.style.height = scale + "px";

    if (scale >= window.innerWidth / 3) {
        grow = false;
    } else if (scale <= window.innerWidth / 30) {
        grow = true;
    }
    console.log(grow);
}

window.addEventListener("mousewheel", resizeElement);