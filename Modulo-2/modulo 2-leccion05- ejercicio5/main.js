'use strict';



const body = document.querySelector('.js-body');


function background(press) {
    if(press.keyCode == '82') {
        body.classList.add('red');
        body.classList.remove('purple') 
    }


    else if(press.keyCode == '77') {  
        body.classList.add('purple');
        body.classList.remove('red');
    }
}

document.addEventListener('keydown', (background)); 

