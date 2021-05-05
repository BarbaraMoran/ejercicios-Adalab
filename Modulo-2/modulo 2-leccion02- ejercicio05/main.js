'use strict';
const hoursPerYear = 525600 / 60;
let age = 33;
age = 4;
age = 21;
const hoursAlive = age * hoursPerYear;
const yourAge = document.querySelector('.js-age');
const yourHours = document.querySelector('.js-hours');



console.log(hoursPerYear);
console.log(hoursAlive);


yourAge.innerHTML += age;
yourHours.innerHTML += hoursAlive;
