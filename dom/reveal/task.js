
const elemenRevealAll = document.querySelectorAll('.reveal');

addEventListener('scroll', function(elem) {
    for(let itemLink of elemenRevealAll) {
        // const topReveal = itemLink.getBoundingClientRect().top;
        // const bottomReveal = itemLink.getBoundingClientRect().bottom;   
        const {top, bottom} = itemLink.getBoundingClientRect();     
        if ((bottom < window.innerHeight) && (top > 0)) {
            itemLink.classList.add("reveal_active");
        } else {
            itemLink.classList.remove("reveal_active");
        } 
    }

});