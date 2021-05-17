"use strict";
const arr = [];

function get100numbers() {
  for (let i = 0; i < 100; i++) {
    console.log(arr.push([i]));
  }
}

get100numbers();
console.log(arr.length);
console.log(arr);
//el array.lenght está bien pero se visualiza raro el array al loguearlo. No estoy segura de qué este bien.
