'use strict';
const button = document.querySelector('.js-button');

function toLog(event) { 
    console.log(event.type);
}
button.addEventListener('click', toLog);

