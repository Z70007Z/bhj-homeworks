
const elementProgress  = document.getElementById('progress');
const elementForm  = document.getElementById('form');

const xhr = new XMLHttpRequest();

// function setProgress(e) {
//     if (e.lengthComputable) {
//         let complete = e.loaded / e.total;
//         $("#progress").value(Math.floor(complete*100));
//         console.log(elementProgress.value);
//     }
// }

elementForm.addEventListener('submit', (even) => {
    even.preventDefault();

        xhr.upload.onprogress  = function(event) {
            
            try {

                // setProgress(event)
                elementProgress.value = event.loaded / event.total;

            } catch(err) { 
                alert("Загрузна не удалась!");
            }
        }


    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    // const formData = new FormData(elementForm);
    xhr.send(new FormData(elementForm));

});


