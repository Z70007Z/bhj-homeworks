
const clickerCounter = document.getElementById('clicker__counter');
const clickerImg = document.getElementById('cookie');
const clickerstartStop = document.getElementById('clicker__startStop');

let startTime = Date.now();

clickerImg.addEventListener('click', (event) => {
    // clickerCounter.textContent = parseInt(clickerCounter.textContent) + 1;;
    // if(clickerImg.getAttribute('width') === '200') { 
    //     clickerImg.width = +clickerImg.width + 50;
    // } else {
    //     clickerImg.width = +clickerImg.width - 50;
    // }  

    clickerImg.width = ++clickerCounter.textContent % 2 ? 250 : 200;

    let endTime = Date.now();    
    let difference = 1 / ((endTime - startTime) / 1000);
    clickerstartStop.textContent = difference.toFixed(2);
    startTime = endTime;
});



let statusSave = clickerCounter.textContent;

function timerCount() {
   
    if (statusSave === clickerCounter.textContent) {
        clickerCounter.textContent = 0;
        clickerstartStop.textContent = 0;
    }

    statusSave = clickerCounter.textContent;
}

let timeoutId = setInterval(timerCount, 1000);
