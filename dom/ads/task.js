
elemenActiveFirst =  Array.from(document.querySelectorAll('.rotator__case_active'));
elemenSpan = Array.from(document.querySelectorAll('.rotator__case'));

let Speed;

for (let j=0; j < elemenActiveFirst.length; j++) { 
    elemenActiveFirst[j].style.color = elemenActiveFirst[j].getAttribute('data-color');
    Speed = elemenActiveFirst[j].getAttribute('data-speed');
}

let timeoutId = setInterval(timerText, Speed);

function timerText() {
    clearInterval(timeoutId)
    for (let i=0; i < elemenSpan.length; i++) {    
        if (elemenSpan[i].classList.contains("rotator__case_active")) {
            const elementNext = elemenSpan[i].nextElementSibling;
            if (elementNext !== null) {
                elemenSpan[i].classList.remove("rotator__case_active"); 
                elementNext.style.color = elementNext.getAttribute('data-color');
                Speed = elementNext.getAttribute('data-speed');
                elementNext.classList.add("rotator__case_active");
                i +=1;
            } else {
                elemenSpan[i].classList.remove("rotator__case_active");
                const elemFirstChild = elemenSpan[i].closest('.rotator').firstElementChild;               
                elemFirstChild.classList.add("rotator__case_active");
                elemFirstChild.style.color = elemFirstChild.getAttribute('data-color');
                Speed = elemFirstChild.getAttribute('data-speed');
                if ((i + 1) > elemenSpan.length) {
                    break;
                } else {
                    i +=1;  
                }
            }
        }
    }    
    timeoutId = setInterval(timerText, Speed);
}


