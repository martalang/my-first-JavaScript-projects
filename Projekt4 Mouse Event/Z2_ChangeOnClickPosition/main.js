// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

window.addEventListener('click', event => {
    x = event.clientX;
    y = event.clientY;
    const expr = true;
    if (x % 2 == 0 && y % 2 == 0) {
        document.body.style.backgroundColor = 'red';
    } else if (x % 2 != 0 && y % 2 != 0) {
        document.body.style.backgroundColor = 'blue';
    } else {
        document.body.style.backgroundColor = 'green';
    }
    console.log(`${x}, ${y}`);
});