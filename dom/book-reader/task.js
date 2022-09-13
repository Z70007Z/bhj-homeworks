

elemenFontSize = Array.from(document.querySelectorAll('.font-size'));
const elemenBookControls = document.querySelectorAll('.book__control');
const elemenBook = document.querySelector('.book');


for (let i=0; i < elemenFontSize.length; i++) {
    elemenFontSize[i].onclick = function(elem) {
        const elemenFontSizeActive = document.querySelector('.font-size_active');
        elemenFontSizeActive.classList.remove('font-size_active');
        elemenFontSize[i].classList.add('font-size_active');

        if (i === 0) {
            elemenBook.classList.add('book_fs-small');
            elemenBook.classList.remove('book_fs-big');
        } else if (i === 1) {
            elemenBook.classList.remove('book_fs-small');
            elemenBook.classList.remove('book_fs-big');
        } 
        if (i === 2) {
            elemenBook.classList.remove('book_fs-small');
            elemenBook.classList.add('book_fs-big');           
        }       
    }
}


for(let itemLink of elemenBookControls) {  
    itemLink.onclick = function(elem) {
        elem.preventDefault();  
    }
}