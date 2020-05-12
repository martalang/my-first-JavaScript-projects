// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const textField = document.querySelector('div>div');
let startClick = 2;
let startTime;
let timeTick = 0;

function runStopwatch() {
    timeTick++;
    textField.textContent = (timeTick / 100).toFixed(2);
}
let indexInterval;

function stopwatchRunPause() {
    startClick++;
    switchStartPause();
    if (startClick % 2 !== 0) {
        indexInterval = setInterval(runStopwatch, 10);
        runStopwatch();
    } else clearInterval(indexInterval);
}

function resetStopwatch() {
    startClick = 2;
    textField.textContent = "---";
    switchStartPause();
    clearInterval(indexInterval)
    timeTick = 0;
}

function switchStartPause() {
    startClick % 2 !== 0 ? btnStart.textContent = "Pause" : btnStart.textContent = "Start";
}

btnStart.addEventListener('click', stopwatchRunPause);
btnReset.addEventListener('click', resetStopwatch);