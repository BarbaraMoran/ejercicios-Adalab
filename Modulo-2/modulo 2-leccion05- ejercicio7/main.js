"use strict";

const buttonEl = document.querySelector(".js-button");

function addButtonClass() {
  buttonEl.classList.toggle("buttonorange");
}

buttonEl.addEventListener("click", addButtonClass);
