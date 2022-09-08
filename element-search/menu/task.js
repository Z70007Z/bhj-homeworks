
//const array = array.from(document.querySelectorAll('li'));

addEventListener("click", function(event) {
    let infoClassName = event.target.classList;

    const elemevtLi = document.querySelector('.menu__link');

    if (String(infoClassName).includes('menu__link')) {
        //window.alert(infoClassName);
        //let nodes = node.querySelector("node > div");
        //const elemevtUl = document.getElementsByClassName(infoClassName);
        const elementClick = document.getElementsByClassName(String(infoClassName));
        //const elemevtUl = elementClick.closest('.menu__item');
        //window.alert(elementClick);
        console.log(elementClick);
    }
    //window.alert(infoClassName);
    // if (String(infoClassName).includes('menu__item')) {
    //     elemevtP.classList.remove("modal_active"); 
    //     elemevtS.classList.remove("modal_active"); 
    //     if (String(infoClassName).includes('show-success')) {
    //         elemevtS.classList.add("modal_active");
    //     }   
    // }  

    //window.alert(elemevtA.parentElement);
    // window.alert(li.closest('.menu menu_sub'));
    
    //menu menu_sub
    //console.log(infoClassName);
});


//  const elementList = document.querySelectorAll('.menu__link');
// console.log(elementList);
// console.log(elementList.length);
// for (let i = 0; i < elementList.length; i++) {
//      elementList[i].addEventListener("click", function(event) {


//         // handle click
//         //elementList[i].closest('.menu_sub');
//         const elementM = document.getElementsByClassName('.menu__link');
//         elementList[i].closest('.menu_sub').classList.add("menu_active");
//         console.log(`Результат: ${elementM}`);
//         //window.alert(elementList);
//         console.log("Сука");
//     });
// };