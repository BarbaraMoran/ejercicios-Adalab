"use strict";

const inputEl = document.querySelector(".js-input");
const textEl = document.querySelector(".js-p");

function getName() {
  localStorage.setItem("name", inputEl.value);
  textEl.innerHTML = inputEl.value;
}

inputEl.addEventListener("keyup", getName);

const keptName = localStorage.getItem("name");

function showName() {
  inputEl.value = keptName;
  textEl.innerHTML = inputEl.value;
}

showName();
