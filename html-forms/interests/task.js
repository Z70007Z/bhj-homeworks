
const elementChecks = document.querySelectorAll('.interest__check');


for(let itemCheck of elementChecks) {
    itemCheck.addEventListener('change', () => {

        const elemetnPerent = itemCheck.closest('.interests_active');
        if (elemetnPerent === null) {

            const elemetnChilds = ((itemCheck.parentElement).nextElementSibling).querySelectorAll('.interest__check');
            for(let itemChild of elemetnChilds) { 
                if (itemCheck.checked === false) {
                    itemChild.checked = false;
                } else {
                    itemChild.checked = true;
                }              
            }
        }
    })
    
}

