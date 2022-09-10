
const elementPrev = document.querySelector('.slider__arrow_prev');
const elementNext = document.querySelector('.slider__arrow_next');

const elementSliderItem = document.querySelectorAll('.slider__item');


function action(step) {

    for(let itemSlider of elementSliderItem) {
        let nextActive;
        if (step === "Next") {
            nextActive = itemSlider.nextElementSibling;
        } else {
            nextActive = itemSlider.previousElementSibling;
        }
        

        if (nextActive !== null)  { 
          //  if ((nextActive.classList).contains('slider__item')) {

                if ((itemSlider.classList).contains('slider__item_active')) {
                    itemSlider.classList.remove('slider__item_active');
                    nextActive.classList.add('slider__item_active'); 
                    break;
                }  

         //   } 
        } else {
            if ((itemSlider.classList).contains('slider__item_active')) {
                itemSlider.classList.remove('slider__item_active');
                
                if (step === "Next") {
                    elementSliderItem[0].classList.add('slider__item_active'); 
                } else {
                    elementSliderItem[elementSliderItem.length-1].classList.add('slider__item_active'); 
                } 
                break; 
            }         
        }
    }

}


elementPrev.onclick = function() {

    action("Prev");
}

elementNext.onclick = function() {
 
    action("Next");
}


// for(let itemSlider of elementSliderItem) {
        
//     const nextActive = itemSlider.nextElementSibling;
//     if (nextActive !== null) { 
//         if ((nextActive.classList).contains('slider__item')) {

//             if ((itemSlider.classList).contains('slider__item_active')) {
//                 itemSlider.classList.remove('slider__item_active');
//                 nextActive.classList.add('slider__item_active'); 
//                 break;
//             }  

//         } 
//     } else {
//         itemSlider.classList.remove('slider__item_active');
//         elementSliderItem[0].classList.add('slider__item_active');             
//     }
// }