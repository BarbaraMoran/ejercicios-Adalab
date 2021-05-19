"use strict";

//BUCLE OF

const numbers = [1, 2, 3];

function writeMyArray() {
  for (const number of numbers) {
    const newItem = document.createElement("li");
    const newContent = document.createTextNode(number);
    newItem.appendChild(newContent);
    const list = document.querySelector(".js-ul");
    list.appendChild(newItem);
  }
}

writeMyArray();

//BUCLE NORMAL
/*
const numbers = [1, 2, 3];

function writeMyArray() {
  for (let i = 0; i < numbers.length; i++) {
    const newItem = document.createElement("li");
    const newContent = document.createTextNode(numbers[i]);
    newItem.appendChild(newContent);
    const list = document.querySelector(".js-ul");
    list.appendChild(newItem);
  }
}

writeMyArray();
*/
