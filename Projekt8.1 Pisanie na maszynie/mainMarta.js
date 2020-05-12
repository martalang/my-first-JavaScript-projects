const spnTekst = document.querySelector('.text');
const myText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sapiente eaque eum sunt at vel, sit facilis ipsa iusto laudantium ducimus facere quis, voluptas reprehenderit ab perferendis aperiam repudiandae odit!";
let index = 0;

function addLetter() {
    spnTekst.textContent += myText[index];
    index++;
    if (index === myText.length)
        clearInterval(timerValue);
};

function cursorAnimation() {
    document.querySelector('.cursor').classList.toggle('active');
};
// setInterval eeturns Value - a Number, representing the ID value of the timer that is set. Use this value with the clearInterval() method to cancel the timer

const timerValue = setInterval(addLetter, 50);
setInterval(cursorAnimation, 400);