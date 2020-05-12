// właściwość parentNode - Dostęp do rodzica!

const btnAdd = document.querySelector('button');
const inptTask = document.querySelector('input');
let text = '';
let btnRemove;
let li;

function enterTask() {
    text = this.value;
}

function addTask() {
    li = document.createElement('li');
    li.textContent = text;
    document.querySelector('ul').appendChild(li);
    htmlAddButton();
}

function htmlAddButton() {
    btnRemove = document.createElement('button');
    btnRemove.textContent = 'X';
    li.appendChild(btnRemove);
    document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask));
}

function removeTask() {
    this.parentNode.remove();
    // lub
    // this.parentNode.style.    textDecoration = "line-through";
    // this.remove();
}

inptTask.addEventListener('input', enterTask);

btnAdd.addEventListener('click', addTask);