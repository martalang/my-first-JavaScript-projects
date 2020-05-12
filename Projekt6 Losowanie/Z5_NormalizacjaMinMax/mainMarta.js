const min = 2;
const max = 5;

for (let index = 0; index < 20; index++) {

    let a = Math.floor(Math.random() * (max - 1) + min);

    console.log(a)
}

var z = document.querySelector('h1').innerText;
document.querySelector('h1').textContent = z.replace('...', min).replace('...', max);