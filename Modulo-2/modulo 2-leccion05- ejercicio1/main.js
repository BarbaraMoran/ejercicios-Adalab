'use strict';

//FUNCIÓN NORMAL CON EVENTO
/*const button = document.querySelector('.js-answer');
const h1Element = document.querySelector('.js-h1')
 
function showMsj(msj) { 
h1Element.innerHTML = (`vaya ida de olla, amiga`);
}
button.addEventListener('click', showMsj);*/

//DECLARAR LA FUNCIÓN CUANDO LA PASAMOS COMO ARGUMENTO
const button = document.querySelector('.js-answer');
const h1Element = document.querySelector('.js-h1');
button.addEventListener('click', function showMsj() {
h1Element.innerHTML = (`vaya ida de olla, amiga`);
});
