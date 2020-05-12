const btnRandomName = document.querySelector('button');
const divMessage = document.querySelector('div');

const nameArray = ['Ania', 'Marysia', 'Kasia', 'Marieta'];

function randomize() {
    let index = Math.floor(Math.random() * nameArray.length);
    divMessage.textContent = `Wylosowałeś imię ${nameArray[index]}`;
}

btnRandomName.addEventListener('click', randomize)