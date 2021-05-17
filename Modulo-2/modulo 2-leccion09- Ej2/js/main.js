"use strict";
const arr = [];

function get100numbers() {
  for (let i = 0; i < 100; i++) {
    arr.push([i]);
  }
}

function getReversed100numbers() {
  get100numbers();
  arr.reverse();
}

getReversed100numbers();
console.log(arr);
console.log(arr.length);

const arrayText = document.querySelector(".js-p");
arrayText.innerHTML = `Este array me ha puesto de los nervios ${arr}`;
