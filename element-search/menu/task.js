


const elementListLink = document.querySelectorAll('.menu__link');
const elementListMenuSub = document.querySelectorAll('.menu_sub');


function closeMenuSub() {
    for(let itemSub of elementListMenuSub) {
        itemSub.classList.remove('menu_active');
    }
}

for(let itemLink of elementListLink) {
     
    itemLink.onclick = function(elem) {

    const perentEnement = itemLink.closest('.menu_sub');
        if (perentEnement == null) {    
            const previousActive = itemLink.nextElementSibling;
            if ((previousActive.classList).contains("menu")) {

                elem.preventDefault();              
                if ((previousActive.classList).contains('menu_active')) {
                    closeMenuSub();
                } else {
                    closeMenuSub();
                    previousActive.classList.add('menu_active');
                } 
                              
            }
        } else {
          //  return false;    
        }    
    };    
}


// [].forEach.call(elementList, function(elem) {
//     elem.addEventListener("click", function(event) {  
        
//         const previousActive = elem.nextElementSibling;
//         if (previousActive.className = "menu") {
//             previousActive.classList.add('menu_active');
//         }
    
//     });
// });


