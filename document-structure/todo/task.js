
const elementInput = document.querySelector('.tasks__input');
const elementAdd = document.querySelector('.tasks__add');
const elementList = document.querySelector('.tasks__list');

let elementTaskRemove;

function htmlAddCode(text) {
    elementList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `;
}

elementInput.addEventListener('keyup', (event) => {
    // event.preventDefault();
    // if (event.key == "Enter"){
    //     htmlAddCode((elementInput.value).trim());
    //     elementTaskRemove = document.querySelectorAll('.task__remove');
    // }
});

elementAdd.addEventListener('click', (event) => {
    event.preventDefault();
    htmlAddCode((elementInput.value).trim())
    elementTaskRemove = document.querySelectorAll('.task__remove');
});

elementList.addEventListener('click', (event) => {
    if (event.target.tagName == 'A') {
        event.target.classList.add('del');
        const elementA = document.querySelector('.del');
        const elementDiv = elementA.closest('.task');
        elementDiv.remove();
    }
    
});
