

const holeAll = [ 'hole1',
                  'hole2',
                  'hole3',
                  'hole4',
                  'hole5',
                  'hole6',
                  'hole7',
                  'hole8',
                  'hole9'
]

const statusDead  = document.getElementById('dead');
const statusLost  = document.getElementById('lost');

addEventListener("click", function(event) {
    let infoClassName = event.target.id;

    for (let i = 0; i < 9; i++) {
        if (holeAll[i] === infoClassName) {  
            if (document.getElementById(infoClassName).className.includes('hole_has-mole')) {
                statusDead.textContent = parseInt(statusDead.textContent) + 1;
            } else {
                statusLost.textContent = parseInt(statusLost.textContent) + 1;
            }
        }
    }    
    
});

function timerCount() {

    if (parseInt(statusDead.textContent) >= 10) {
        alert("Вы победили!");
        statusDead.textContent = 0;
        statusLost.textContent = 0;
    } else if (parseInt(statusLost.textContent) >= 5) {
        alert("Вы проиграли!");
        statusDead.textContent = 0;
        statusLost.textContent = 0;
    }

 }

  let timeoutId = setInterval(timerCount, 1000);


// const hole1R1 = document.getElementById('hole1');
// const hole2R1 = document.getElementById('hole2');
// const hole3R1 = document.getElementById('hole3');
// const hole4R1 = document.getElementById('hole4');
// const hole5R1 = document.getElementById('hole5');
// const hole6R1 = document.getElementById('hole6');
// const hole7R1 = document.getElementById('hole7');
// const hole8R1 = document.getElementById('hole8');
// const hole9R1 = document.getElementById('hole9');


// hole1R1.onclick = function() {
//     if (hole1R1.className.includes('hole_has-mole')) {
//         statusDead.textContent = parseInt(statusDead.textContent) + 1;
//     } else {
//         statusLost.textContent = parseInt(statusLost.textContent) + 1;
//     }
// }
// hole2R1.onclick = function() {
//     if (hole2R1.className.includes('hole_has-mole')) {
//         statusDead.textContent = parseInt(statusDead.textContent) + 1;
//     } else {
//         statusLost.textContent = parseInt(statusLost.textContent) + 1;
//     }
// }
// hole3R1.onclick = function() {
//     if (hole3R1.className.includes('hole_has-mole')) {
//         statusDead.textContent = parseInt(statusDead.textContent) + 1;
//     } else {
//         statusLost.textContent = parseInt(statusLost.textContent) + 1;
//     }
// }
// hole4R1.onclick = function() {
//     if (hole4R1.className.includes('hole_has-mole')) {
//         statusDead.textContent = parseInt(statusDead.textContent) + 1;
//     } else {
//         statusLost.textContent = parseInt(statusLost.textContent) + 1;
//     }
// }
// hole5R1.onclick = function() {
//     if (hole5R1.className.includes('hole_has-mole')) {
//         statusDead.textContent = parseInt(statusDead.textContent) + 1;
//     } else {
//         statusLost.textContent = parseInt(statusLost.textContent) + 1;
//     }
// }
// hole6R1.onclick = function() {
//     if (hole6R1.className.includes('hole_has-mole')) {
//         statusDead.textContent = parseInt(statusDead.textContent) + 1;
//     } else {
//         statusLost.textContent = parseInt(statusLost.textContent) + 1;
//     }
// }
// hole7R1.onclick = function() {
//     if (hole7R1.className.includes('hole_has-mole')) {
//         statusDead.textContent = parseInt(statusDead.textContent) + 1;
//     } else {
//         statusLost.textContent = parseInt(statusLost.textContent) + 1;
//     }
// }
// hole8R1.onclick = function() {
//     if (hole8R1.className.includes('hole_has-mole')) {
//         statusDead.textContent = parseInt(statusDead.textContent) + 1;
//     } else {
//         statusLost.textContent = parseInt(statusLost.textContent) + 1;
//     }
// }
// hole9R1.onclick = function() {
//     if (hole9R1.className.includes('hole_has-mole')) {
//         statusDead.textContent = parseInt(statusDead.textContent) + 1;
//     } else {
//         statusLost.textContent = parseInt(statusLost.textContent) + 1;
//     }
// }

// function timerCount() {

//     if (statusDead.textContent === '10') {
//         window.alert("Вы победили!");
//         statusDead.textContent = 0;
//     } else if (statusLost.textContent === '5') {
//         window.alert("Вы проиграли!");
//         statusLost.textContent = 0;
//     }

//  }

//   let timeoutId = setInterval(timerCount, 1000);