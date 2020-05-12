const h1 = document.querySelector("h1");

window.addEventListener("mousemove", e => {
    x = e.clientX;
    y = e.clientY;
    h1.textContent = `${x}, ${y}`;
    let scaleX = 255 / window.innerWidth;
    let scaleY = 255 / window.innerHeight;
    document.body.style.backgroundColor = `rgb(${x*scaleX},${y*scaleY},${(x+y)*scaleY})`;
    console.log(color);
})