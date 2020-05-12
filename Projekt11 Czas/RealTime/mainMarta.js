const timeScreen = document.querySelector('span');

function showTime() {
    let time = new Date();
    let hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    let minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    timeScreen.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(showTime, 1000)