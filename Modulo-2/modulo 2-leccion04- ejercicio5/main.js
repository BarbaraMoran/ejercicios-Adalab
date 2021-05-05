'use strict';

function getEl(selector) {
  const result = document.querySelector(selector); 
  return result
}

 const h1El = getEl('.h1');
 console.log(h1El)

 const pEl = getEl('.js-p');
 console.log(pEl)