
const elementChat = document.querySelectorAll('.has-tooltip');

function htmlAddCode(message,text,left) {
    // message.afterEnd(`
    //     <div class="${classIn}">
    //        ${text}
    //     </div>
    // `);
    delAllTooltipActive();
    const elementdiv = document.createElement("div");
    elementdiv.classList.add('tooltip');
    elementdiv.classList.add('tooltip_active');
    elementdiv.textContent = text;
    elementdiv.setAttribute('data-position', '1000');
    elementdiv.style.left = left + "px";
    message.after(elementdiv);
}

function delAllTooltipActive() {
    const elementToolTip = document.querySelectorAll('.tooltip');
    for (let itemToolTip of elementToolTip) {
        if (itemToolTip.classList.contains('tooltip') && (itemToolTip.classList.contains('tooltip_active'))) {
            itemToolTip.classList.remove('tooltip_active');
        }
    }
}

for (let itemA of elementChat) {
    itemA.addEventListener('click', (event) => {
        event.preventDefault();

        
        const {left, top} = itemA.getBoundingClientRect();

        if (itemA.nextElementSibling !== null) {
            let elementNext = itemA.nextElementSibling;
            if (elementNext.classList.contains('tooltip')) {
                if (elementNext.classList.contains('tooltip_active')) {
                    delAllTooltipActive();
                } else {
                    delAllTooltipActive();
                    elementNext.classList.add('tooltip_active');
                }
            } else {
                htmlAddCode(itemA, itemA.title, left); 
            }
        } else {
            htmlAddCode(itemA, itemA.title, left);            
        }
    });
}