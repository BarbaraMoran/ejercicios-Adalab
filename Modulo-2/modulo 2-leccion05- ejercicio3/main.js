'use strict';
//DECLARAR FUNCIÓN CON EVENTO (MODO NORMAL)
/*const lorem = document.querySelector('.js-lorem');
const body = document.querySelector('.js-body');

function newText() {
body.innerHTML += `<p>${lorem.innerHTML}</p>`;
}

lorem.addEventListener('mouseover', newText); */

//DUDA ¿Cómo haríamos para añadir lorem como elemento al inner.html del body?

//DECLARAR LA FUNCIÓN CUANDO LA PASAMOS COMO ARGUMENTO
const lorem = document.querySelector('.js-lorem');
const body = document.querySelector('.js-body');
lorem.addEventListener('mouseover', function newText() {
    body.innerHTML += `<p>${lorem.innerHTML}</p>`;
});
