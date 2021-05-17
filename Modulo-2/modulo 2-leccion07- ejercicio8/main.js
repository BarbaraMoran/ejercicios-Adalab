"use strict";

const buttonList = document.querySelectorAll(".js-button");
const bodyEl = document.querySelector(".body");

function handlerButton() {
  bodyEl.classList.toggle("red");
}

for (const button of buttonList) {
  button.addEventListener("click", handlerButton);
}
