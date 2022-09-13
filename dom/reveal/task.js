
const elemenReveal = document.querySelector('.reveal');


addEventListener('scroll', function(elem) {
    const topReveal = elemenReveal.getBoundingClientRect().top;
    const bottomReveal = elemenReveal.getBoundingClientRect().bottom;

    if ((bottomReveal < window.innerHeight) && (topReveal > 0)) {
        elemenReveal.classList.add("reveal_active");
    } else {
        elemenReveal.classList.remove("reveal_active");
    }
    
});