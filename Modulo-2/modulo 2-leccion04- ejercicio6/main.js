'use strict';

let h1El = document.querySelector('.js-h1');
const pEl = document.querySelector('.js-p');
const ulEl = document.querySelector('.js-ul');
const liEl = document.querySelector('.js-li');



function getEl(selector) {
  const result = document.querySelector(selector); 
  const resultInner= result.innerHTML;

  //if (result.classList.contains(h1El || pEl || ulEl || liEl) {console.log()}


  if (result !== h1El || pEl || ulEl || liEl) { resultInner += `No existe ningún elemento con clase, id o tag llamado ${selector}`;

  }

  return resultInner
}

h1El = getEl('.js-h1')
console.log(getEl ('.js-h1'))


//const h1El = getEl('.js-h1');

//const pEl = getEl('.js-p');
//const ulEl = getEl('.js-ul');
//const liEl = getEl ('.js-fgdfgdf')


 
/*const h1El = getEl('.h1');
 console.log(h1El)

 const pEl = getEl('.js-p');
 console.log(pEl)

 const ulEl = getEl('.js-ul');
 console.log(ulEl)*/