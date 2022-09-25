
const elementProgress  = document.getElementById('progress');
const elementForm  = document.getElementById('form');
const elementSend = document.getElementById("send");

const xhr = new XMLHttpRequest();

elementSend.addEventListener('submit', (even) => {
    even.preventDefault();

    xhr.onload.onprogress  = function(event) {
        try {
            
            elementProgress.value = event.loaded;

        } catch(err) { 
            alert("Загрузна не удалась!");
        }
    }
    // xhr.addEventListener('readystatechange',(event) => {

    // });

    xhr.open("POST", "/form/");
    const formData = new FormData(elementForm);
    xhr.send(formData);

});

    


