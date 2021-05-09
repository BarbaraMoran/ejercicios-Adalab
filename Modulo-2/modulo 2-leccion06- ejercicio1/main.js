'use strict';
const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
  };
const text = document.querySelector('.js-p');
text.innerHTML +=`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
  };
  const text2 = document.querySelector('.js-p2');
text2.innerHTML +=`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;
