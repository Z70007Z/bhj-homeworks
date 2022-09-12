
const elementListItem = document.querySelectorAll('.dropdown__item');
const elementListLink = document.querySelectorAll('.dropdown__link');
elementDivValue = Array.from(document.querySelectorAll('.dropdown__value'));

let ElemNew;

for(let itemLink of elementDivValue) {
    itemLink.onclick = function(elem) {
    
            const elementActive = itemLink.nextElementSibling;
            if ((elementActive.classList).contains("dropdown__list_active")) {
                elementActive.classList.remove('dropdown__list_active');
            } else {
                elementActive.classList.add('dropdown__list_active');
            }
            ElemNew = itemLink;

    }
}

for(let itemLink of elementListItem) {
    itemLink.onclick = function(elem) {
        ElemNew.textContent = itemLink.textContent;
        (itemLink.closest('.dropdown__list')).classList.remove('dropdown__list_active');
    }
}

for(let itemLink of elementListLink) {  
    itemLink.onclick = function(elem) {
        elem.preventDefault();  
    }
}


addEventListener('click', (event) => {

    const elementList = document.querySelectorAll('.dropdown__list'); 
    if (!(event.target.classList).contains("dropdown__value")) {
        for(let itemLink of elementList) {
            itemLink.classList.remove('dropdown__list_active');
        }
    }
});


