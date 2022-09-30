
const elementEditor = document.getElementById('editor');

elementEditor.value = localStorage.getItem('value');

elementEditor.addEventListener('input', (even) => {

     localStorage.setItem('value', elementEditor.value); 

});

