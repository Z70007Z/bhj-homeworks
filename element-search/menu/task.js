


const elementList = document.querySelectorAll('.menu__link');
let check;

for(let item of elementList) {
    item.addEventListener("click", function(event) {  
        
        const previousActive = item.nextElementSibling;
        if (previousActive.className = "menu") {
            previousActive.classList.add('menu_active');
        }
    
    });    
}


// [].forEach.call(elementList, function(elem) {
//     elem.addEventListener("click", function(event) {  
        
//         const previousActive = elem.nextElementSibling;
//         if (previousActive.className = "menu") {
//             previousActive.classList.add('menu_active');
//         }
    
//     });
// });


