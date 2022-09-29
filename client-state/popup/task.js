
const elemevtModal = document.getElementById('subscribe-modal');

// setCookie("window","close", 1);

function setCookie(name, value, Expires) {
    if (Expires === 1) {
        document.cookie = name + '=' + encodeURIComponent(value) + '; Expires=The, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure';
    } else {
        document.cookie = name + '=' + encodeURIComponent(value) + '; SameSite=None; Secure';
    }
}

function getCookie(name) {
    if (document.cookie) {
        const elementSplit = document.cookie.split('; ');
        const elementCookie = elementSplit.find(el => el.startsWith(name + '='));
        return elementCookie.substring(name.length+1)
    }    
    return null
}

if ((getCookie("window") === null) || (getCookie("window") !== 'close')) {
    elemevtModal.classList.add("modal_active");
}

addEventListener("click", function(event) {
    let infoClassName = event.target.classList;

    if (infoClassName.contains('modal__close')) {
        elemevtModal.classList.remove("modal_active"); 
        setCookie("window","close", 0);
    } 

});