"use strict";

const bodyEl = document.querySelector(".js-body");
const inputEls = document.querySelectorAll(".js-input");

function darkTheme() {
  bodyEl.classList.add("dark");
  bodyEl.classList.remove("light");
}

function lightTheme() {
  bodyEl.classList.add("light");
  bodyEl.classList.remove("dark");
}

function handleSelect(event) {
  const selectedOption = event.currentTarget;
  localStorage.setItem("value", selectedOption.value);
  if (selectedOption.value === "dark") {
    darkTheme();
  } else {
    lightTheme();
  }
}

for (const selectedOption of inputEls) {
  selectedOption.addEventListener("click", handleSelect);
}

const keptTheme = localStorage.getItem("value");
console.log(keptTheme);

function showTheme() {
  if (keptTheme === "dark") {
    darkTheme();
  } else {
    lightTheme();
  }
}

showTheme();

//otra manera
/*
function changeTheme(event) {
  const selectedOption = event.currentTarget;
  localStorage.setItem("value", selectedOption.value);
  if (selectedOption.value === "dark") {
    bodyEl.classList.add("dark");
    bodyEl.classList.remove("light");
  } else {
    bodyEl.classList.add("light");
    bodyEl.classList.remove("dark");
  }
}

for (const selectedOption of inputEls) {
  selectedOption.addEventListener("click", changeTheme);
}

const keptTheme = localStorage.getItem("value");
console.log(keptTheme);

function showTheme() {
  if (keptTheme === "dark") {
    bodyEl.classList.add("dark");
    bodyEl.classList.remove("light");
  } else {
    bodyEl.classList.add("light");
    bodyEl.classList.remove("dark");
  }
}

showTheme();

*/
