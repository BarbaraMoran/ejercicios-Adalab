'use strict';

const buttonList = document.querySelectorAll('.js-button');
const bodyEl = document.querySelector("body");
//const buttonEl[0].classList = 



function handlerButton () {
    bodyEl.classList.toggle('red');
        
}
   

for (const button of buttonList) {
    button.addEventListener('click', handlerButton);
}



