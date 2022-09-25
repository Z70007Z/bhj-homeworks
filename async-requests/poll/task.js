
const elementPollAnswers = document.querySelector(".poll__answers");
const elementPollTitle = document.querySelector(".poll__title");
let id;

const xhr = new XMLHttpRequest();

document.addEventListener('click', (event) => {

    event.preventDefault();
    if ((event.target.classList).contains("poll__answer")) {
        alert("Спасибо, ваш голос засчитан!");
        let answer;
        xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        const elementPollAnswer = document.querySelectorAll(".poll__answer");
        for (let i=0; i < elementPollAnswer.length; i++) {
            if (elementPollAnswer.textContent = event.target.textContent) {
                answer = i;
            }
            elementPollAnswer[i].remove();
        }

        xhr.send(`vote=${id}&answer=${answer}`);
    }        
}); 

function htmlAddCode(answer) {
    elementPollAnswers.innerHTML += `
    <button class="poll__answer">
        ${answer}
    </button>
    `;
}

function htmlAddCodeStat(key, answer) {
    elementPollAnswers.innerHTML += `
    <div class="poll__stat">
       ${key} : ${answer} голосов!
    </div>
    `;
}

xhr.addEventListener('readystatechange',(event) => {
    event.preventDefault();
    // if (xhr.readyState === xhr.DONE) {
    try {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            let object = JSON.parse(xhr.responseText);

            if (object.data !== undefined) {
                id = object.id;
                elementPollTitle.textContent = object.data.title;
                Object.entries(object.data.answers).forEach((entry) => {
                    const [key, value] = entry;
                    htmlAddCode(value);                         
                });
            } else if (object.stat !== undefined) {
                Object.entries(object.stat).forEach((entry) => {
                    const [key, value] = entry;
                    htmlAddCodeStat(value.answer, value.votes);                         
                });           
            }
        }
    } catch(err) { 
        alert("Запрос не удался");
    }
});

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();