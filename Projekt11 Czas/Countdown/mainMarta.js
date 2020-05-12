let futureDate = new Date(2020, 5, 29, 15, 0, 0); // miesiące indeksowane od 0!!!

function countDown() {
    let actualDate = new Date();
    let timeDiff = new Date(futureDate - actualDate);
    document.querySelector('.mnth').textContent = timeDiff.getMonth();
    document.querySelector('.d').textContent = timeDiff.getDay();
    document.querySelector('.h').textContent = timeDiff.getHours();
    document.querySelector('.m').textContent = timeDiff.getMinutes();
    document.querySelector('.s').textContent = timeDiff.getSeconds();
}

setInterval(countDown, 1000);