"use strict";
const hoursPerYear = 525600 / 60;
const yourAge = document.querySelector(".js-age");

const hoursAlive = parseInt(yourAge.innerHTML) * hoursPerYear;

console.log(yourAge.innerHTML);
console.log(hoursPerYear);
console.log(hoursAlive);
