const square = document.querySelector('div');
let posX = 150;
let posY = 50;
square.style.top = posY + 'px';
square.style.left = posX + 'px';
let flag = false;

square.addEventListener("mousedown", event => {
    flag = true;
    square.style.backgroundColor = "grey";
    console.log('grabbed');
    offX = event.offsetX;
    offY = event.offsetY;
})

square.addEventListener('mousemove', event => {
    if (flag) {
        square.style.top = `${event.clientY- offY}px`;
        square.style.left = `${event.clientX- offX}px`;
        console.log('moved');
    }
})

square.addEventListener('mouseup', event => {
    square.style.backgroundColor = "black";
    flag = false;
    console.log('dropped');
})