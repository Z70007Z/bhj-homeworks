
const elementSignin = document.getElementById('signin');
const elemevtBtn = document.getElementById('signin__btn');
const elemevtForm = document.getElementById('signin__form');

const elemevtLogin = document.getElementsByName('login');
const elemevtPassword = document.getElementsByName('password');

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

// function saveJSON(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
// }

// function restoreJSON(key) {
//     try {
//         return JSON.parse(localStorage.getItem(key));
//     } catch {
//         return null;
//     }
// }

elemevtBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // xhr.addEventListener('readystatechange',(event) => {
    //     try {
    //         if (xhr.status != 200) {
    //             alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    //         } else {
    //             let object = JSON.parse(xhr.responseText);
    //             console.log(object);

    //         }
    //     } catch(err) { 
    //         alert("Запрос не удался");
    //     }
    

    // });
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };

    // xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    // setRequestHeader("Content-Type", "application/json");
    let data = JSON.stringify({ "login": elemevtLogin.value, "password": elemevtPassword.value });
    xhr.send(data);
    // xhr.send(new FormData(elemevtForm));

});


