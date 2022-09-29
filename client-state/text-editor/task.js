
const elementEditor = document.getElementById('editor');
const elementStorage  = localStorage.getItem('value');

if (elementStorage) {

    elementEditor.value = elementStorage;
}

elementEditor.addEventListener('input', (even) => {


     localStorage.setItem('value', elementEditor.value); 

});

