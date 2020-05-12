const btnAddName = document.querySelector('button');
const divListOfNames = document.querySelector('div');
const inputName = document.querySelector('input');
let names = [];

btnAddName.addEventListener('click', (e) => {
    e.preventDefault(); //zapobiega przeładowaniu strony
    let name = inputName.value;
    names.push(' ' + name);
    divListOfNames.textContent = names;
    inputName.value = '';
});