const inptAdd = document.querySelector('input');
const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const resultText = document.querySelector('h1');

let options = ['walcz', 'przemyśl ponownie'];

btnAdd.addEventListener('click', e => {
    e.preventDefault();
    let newOption = inptAdd.value;
    options.push(newOption);
    inptAdd.value = "";
});

btnClean.addEventListener('click', e => {
    e.preventDefault();
    options.length = 0;
});

btnShowOptions.addEventListener('click', e => {
    alert(options.join(", "));
});

btnShowAdvice.addEventListener('click', e => {
    rndmIndex = Math.floor(Math.random() * options.length)
    resultText.textContent = options[rndmIndex];
});