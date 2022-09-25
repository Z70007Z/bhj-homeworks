

const elementItems  = document.getElementById('items');
const elementImg = document.querySelector(".loader");
const xhr = new XMLHttpRequest();

//  localStorage.clear();

function htmlAddCode(Atr,Sum) {
    elementItems.innerHTML += `
    <div class="item">
        <div class="item__code">
            ${Atr}
        </div>
        <div class="item__value">
            ${Sum}            
        </div>
        <div class="item__currency">
            руб.
        </div>
    </div>
    `;
}

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

// xhr.addEventListener('readystatechange',() => {
xhr.onload = function() {
try {
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
    // if (xhr.readyState === xhr.DONE) {
        if (elementImg.classList.contains('loader_active')) {
            elementImg.classList.remove('loader_active');

            let object = JSON.parse(xhr.responseText);
          
            Object.entries(object.response.Valute).forEach((entry) => {
                const [key, value] = entry;
                const valueCharCode = value.CharCode;
                const valueValue = value.Value;

                if (localStorage[valueCharCode] !== undefined) {
                    htmlAddCode(valueCharCode,localStorage[valueCharCode]);
                } else {
                    htmlAddCode(valueCharCode,"Пока нет значения!");
                }
                localStorage.setItem(valueCharCode, valueValue);               
            });
        }
    }
} catch(err) { 
    alert("Запрос не удался");
}
}

