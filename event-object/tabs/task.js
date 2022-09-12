
elementListTab = Array.from(document.querySelectorAll('.tab'));
elementListСontent = Array.from(document.querySelectorAll('.tab__content'));

function clearAction() {
        for (let i=0; i < elementListTab.length; i++) {
        elementListTab[i].classList.remove("tab_active");
        elementListСontent[i].classList.remove("tab__content_active");
    }
}

for (let i=0; i < elementListTab.length; i++) {    
    elementListTab[i].onclick = function(elem) {
        clearAction();
        elementListTab[i].classList.add("tab_active");
        elementListСontent[i].classList.add("tab__content_active");
    }
}

