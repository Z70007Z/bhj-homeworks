
const elemenRevealAll = document.querySelectorAll('.reveal');

addEventListener('scroll', function(elem) {
    // for(let itemLink of elemenRevealAll) {
        for (let j=0; j < elemenRevealAll.length; j++) { 
        // const topReveal = itemLink.getBoundingClientRect().top;
        // const bottomReveal = itemLink.getBoundingClientRect().bottom;   
        const {top, bottom} = elemenRevealAll[i].getBoundingClientRect();     
        if ((bottom < window.innerHeight) && (top > 0)) {
            elemenRevealAll[i].classList.add("reveal_active");
        } else {
            elemenRevealAll[i].classList.remove("reveal_active");
        } 
    }

});