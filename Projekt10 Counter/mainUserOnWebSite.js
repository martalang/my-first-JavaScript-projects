function userTimer() {
    let seconds = 0;
    return function addSecond() {
        seconds++;
        document.body.textContent = seconds;
    }
}


const user = userTimer();
setInterval(user, 1000);