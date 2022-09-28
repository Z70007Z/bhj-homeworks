
const elementProgress  = document.getElementById('progress');
const elementForm  = document.getElementById('form');
const elementSend = document.getElementById("send");
const elementfile= document.getElementById("file");

const xhr = new XMLHttpRequest();

function setProgress(e) {
    if (e.lengthComputable) {
        let complete = e.loaded / e.total;
        $("#progress").value(Math.floor(complete*100));
        console.log(elementProgress.value);
    }
}

elementSend.addEventListener('submit', (even) => {
    even.preventDefault();
    let input = this.elements.file;
    let file = input.files[0];

        xhr.onload.onprogress  = function(event) {
            try {

                setProgress(event)

            } catch(err) { 
                alert("Загрузна не удалась!");
            }
        }

    //xhr.open("POST", "/Form/");

    const formData = new FormData(elementForm);
    // formData.append('file', file);
    formData.append("myfile", file);

    xhr.send(formData);

});