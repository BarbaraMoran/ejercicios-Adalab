"use strict";

const inputEl = document.querySelector(".js-input");
const textEl = document.querySelector(".js-p");
const inputEl2 = document.querySelector(".js-input2");
const formEl = document.querySelector(".form");

const data = {
  name: "",
  surName: "",
};

function setData() {
  localStorage.setItem("data", JSON.stringify(data));
}

function getData(event) {
  const selectedInput = event.target.id;
  data[selectedInput] = event.target.value;
  setData();
  let keptData = JSON.parse(localStorage.getItem("data"));
  console.log(keptData.name);
  console.log(keptData.surName);
}

formEl.addEventListener("keyup", getData);

/*
function getData() {
  localStorage.setItem("name", data.name);
  localStorage.setItem("surname", inputEl2.value);
  textEl.innerHTML = `${inputEl.value}  ${inputEl2.value}`;
}

inputEl.addEventListener("keyup", getData);
inputEl2.addEventListener("keyup", getData);

const keptName = localStorage.getItem("name");
const keptSurname = localStorage.getItem("surname");

function showData() {
  inputEl.value = keptName;
  inputEl2.value = keptSurname;
  textEl.innerHTML = inputEl.value;
  textEl.innerHTML += inputEl2.value;
}

showData();*/
