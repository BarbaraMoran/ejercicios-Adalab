"use strict";

const bodyEL = document.querySelector(".js-body");
bodyEL.classList.add("board");

const pEl = document.createElement("p");
const text = document.createTextNode("He aprendido los bucles");

console.log(pEl);

function Write100() {
  for (let i = 0; i < 100; i++) {
    const pEl = document.createElement("p");
    const text = document.createTextNode("He aprendido los bucles");
    pEl.appendChild(text);
    bodyEL.appendChild(pEl);
  }
}

Write100();
