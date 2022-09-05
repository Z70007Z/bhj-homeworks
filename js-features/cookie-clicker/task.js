
const clickerCounter = document.getElementById('clicker__counter');
const clickerImg = document.getElementById('cookie');
//const clickerForm = document.getElementById('clicker');

clickerImg.onclick = function() {

    //let target = e.target;
    //if (target.tagName != 'IMG') return;
    clickerCounter.textContent = parseInt(clickerCounter.textContent) + 1;

    if (clickerImg.getAttribute('width') === '200') { 
        clickerImg.width = clickerImg.width + 50;
    } else {
        clickerImg.width = clickerImg.width - 50;
    } 

}

 function timerCount() {
    //const timer = document.getElementById("timer")

    clickerCounter.textContent = parseInt(clickerCounter.textContent) - 1;

    if (parseInt(clickerCounter.textContent) === 0) {
        clearTimeout(timeoutId);
        window.alert("Вы победили в конкурсе!");
    }
 }

  let timeoutId = setInterval(timerCount, 1000);

