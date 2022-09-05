
const getTimer = document.getElementById('timer');

 function timerCount() {

    getTimer.textContent = parseInt(getTimer.textContent) - 1;
    //getTimer.textContent = formatTime()

    if (getTimer.textContent === '0') {
        clearTimeout(timeoutId);
        window.alert("Вы победили в конкурсе!");
    }
 }

let timeoutId = setInterval(timerCount, 1000);

