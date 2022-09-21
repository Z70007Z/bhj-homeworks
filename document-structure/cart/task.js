
const elementCart = document.querySelector('.cart__products')
const elementDec = document.querySelectorAll('.product__quantity-control_dec')
const elementInc = document.querySelectorAll('.product__quantity-control_inc')
const elementAdd = document.querySelectorAll('.product__add')


function htmlAddCode(Atr,Src,text) {
    elementCart.innerHTML += `
    <div class="cart__product" data-id="${Atr}">
        <img class="cart__product-image" src="${Src}">
        <div class="cart__product-count">${text}</div>
    </div>
    `;
}

for (let itemD of elementDec) {
    itemD.addEventListener('click', (event) => {
        event.preventDefault();
        const elementText = itemD.nextElementSibling;
        if (elementText.textContent > 1) {
            elementText.textContent = Number(elementText.textContent) - 1;
        }        
    });
}

for (let itemI of elementInc) {
    itemI.addEventListener('click', (event) => {
        event.preventDefault();
        const elementText = itemI.previousElementSibling;
            elementText.textContent = Number(elementText.textContent) + 1;        
    });
}

for (let itemA of elementAdd) {
    itemA.addEventListener('click', (event) => {
        event.preventDefault();
        const elementDivUp = itemA.previousElementSibling;
        const elementСhild = elementDivUp.querySelector('.product__quantity-value');

        const elementProduct = itemA.closest('.product');
        const elementCartProduct = document.querySelectorAll('.cart__product');
        let elementID = 0;
        for (let itemCart of elementCartProduct) {
            if (itemCart.getAttribute('data-id') === elementProduct.getAttribute('data-id')) {
                elementID = 1;
                itemCart.lastElementChild.textContent = Number(itemCart.lastElementChild.textContent) + Number(elementСhild.textContent);
            }           
        }

        if (elementID === 0) {
            const elementProductControls = itemA.closest('.product__controls');
            const elementProductControlsPrevious = elementProductControls.previousElementSibling;
            htmlAddCode(elementProduct.getAttribute('data-id'),elementProductControlsPrevious.src,elementСhild.textContent);
        }
    });
}