

const elemevtP = document.getElementById('modal_main');
const elemevtS = document.getElementById('modal_success');

elemevtP.classList.add("modal_active");

addEventListener("click", function(event) {
    let infoClassName = event.target.classList;

    if (String(infoClassName).includes('modal__close')) {
        elemevtP.classList.remove("modal_active"); 
        elemevtS.classList.remove("modal_active"); 
        if (String(infoClassName).includes('show-success')) {
            elemevtS.classList.add("modal_active");
        }   
    }  
});
