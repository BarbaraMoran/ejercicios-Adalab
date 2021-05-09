'use strict';

const buttonEl = document.querySelector('.js-button');
const buttonEl2 = document.querySelector('.js-newbutton');


function handlerAddButtonContainer(event) {
 const selectedbuttoncontainer = event.currentTarget;
 selectedbuttoncontainer.classList.toggle("buttonorange");
    
}

buttonEl.addEventListener('click', handlerAddButtonContainer);
buttonEl2.addEventListener('click', handlerAddButtonContainer);


//buttonEl.addEventListener('click', handlerAddButtonClass);
//buttonEl2 = document.querySelector('click' handle)



