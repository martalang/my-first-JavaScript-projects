// właściwość parentNode - Dostęp do rodzica!

const btnAdd = document.querySelector('button');
const inptTask = document.querySelector('input');
let text = '';
let btnRemove;
let li;

function enterTask() {
    text = this.value;
}
let keyIndex = 0;

function addTask() {
    keyIndex++;
    li = document.createElement('li');
    // nadajemy atrybut data-key, do którego będziemy sie odwoływać poprzez .dataset.key
    li.setAttribute('data-key', `${keyIndex}`);
    li.textContent = text;
    document.querySelector('ul').appendChild(li);
    htmlAddButton();
    // console.log(li.dataset.key);
}

function htmlAddButton() {
    btnRemove = document.createElement('button');
    btnRemove.setAttribute('data-key', `${keyIndex}`);
    btnRemove.textContent = 'X';
    li.appendChild(btnRemove);
    document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask));
}

function removeTask() {
    const keyIndexToRemove = this.dataset.key;
    // console.log(document.querySelector(`li[data-key="${keyIndexToRemove}"]`));
    document.querySelector(`li[data-key="${keyIndexToRemove}"]`).remove();
}

inptTask.addEventListener('input', enterTask);

btnAdd.addEventListener('click', addTask);