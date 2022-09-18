
const elementChat = document.querySelector('.chat-widget');
const elementChatSide = document.querySelector('.chat-widget__side');
const elementChatInput = document.getElementById('chat-widget__input');

const messages = document.querySelector( '.chat-widget__messages' );

const messagesRomot = [ 'Что нужно?',
                        'Работаю!',
                        'Может и помогу.',
                        'Ха.',
                        'Пока!',
                        'Оно вам нужно?',
                        'Ошибка!',
                        'Спасибо.',
                        'Вот еще!'
]

elementChatSide.addEventListener('click', () => {
    elementChat.classList.add('chat-widget_active');
    htmlAddCode("",getTime(),"Привет!");
})

function htmlAddCode(classIn,time,text) {
    messages.innerHTML += `
        <div class="message ${classIn}">
            <div class="message__time">${time}</div>
            <div class="message__text">${text}</div>
        </div>
    `;
}

function getTime() {
    let data = new Date();  
    let time  = data.getHours() + ":" +  data.getMinutes();
    return time;
}

function textRobot() {
            let rand = Math.floor(Math.random() * messagesRomot.length);
            htmlAddCode("",getTime(),messagesRomot[rand]);
}

elementChatInput.addEventListener('keyup', (event) => {
    if (event.key == "Enter"){
        htmlAddCode("message_client",getTime(),(elementChatInput.value).trim());
        elementChatInput.value = '';
        
        let timerId = setInterval(() => textRobot(), 2000);
        setTimeout(() => {clearInterval(timerId);}, 3000);
    }
});


