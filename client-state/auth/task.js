
const elementBtn = document.getElementById('signin__btn');
const elementBtnDel = document.getElementById('btnDel');

const elementSignin = document.getElementById('signin');
const elementWelcome = document.getElementById('welcome');
const elementUserId = document.getElementById('user_id');

const xhr = new XMLHttpRequest();

if (localStorage.getItem('user_id')) {
    elementSignin.classList.remove('signin_active');
    elementUserId.textContent = localStorage.getItem('user_id');
    elementWelcome.classList.add("welcome_active");
}

function cleanValue() {
    document.getElementsByName('login')[0].value = '';;
    document.getElementsByName('password')[0].value = '';;
}

elementBtn.addEventListener("click", function(event) {
    event.preventDefault();


    xhr.onreadystatechange = function () {    
        try {

            if (xhr.readyState === 4 && xhr.status === 200) {
                let object = JSON.parse(xhr.responseText);

                if (object.user_id) {
                    localStorage.setItem('user_id', object.user_id); 
                    elementSignin.classList.remove('signin_active');
                    elementUserId.textContent = object.user_id;
                    elementWelcome.classList.add("welcome_active");
                    cleanValue();
                } else {
                    alert("Неверный логин/пароль");
                    cleanValue();
                }

            }
        } catch(err) { 
            alert("Запрос не удался");
        }

    };

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(new FormData(document.getElementById('signin__form')));

});

elementBtnDel.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.removeItem('user_id');
    elementSignin.classList.add('signin_active');
    elementUserId.textContent = '';
    elementWelcome.classList.remove("welcome_active");
});

    // xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    // let data = JSON.stringify({ "login": elemevtLogin.value, "password": elemevtPassword.value });
    // xhr.send(data);

