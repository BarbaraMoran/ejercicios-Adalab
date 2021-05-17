"use strict";

const result = document.querySelector(".js-result");
const send = document.querySelector(".js-submit");

function getRandomNumber() {
  const number = Math.random() * 1;
  return number;
}

function toSend() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  if (randomNumber <= 0.3) {
    console.log("SI");
    result.innerHTML = "SI";
  } else if (randomNumber >= 0.8) {
    console.log("NO");
    result.innerHTML = "NO";
  } else {
    console.log("Puede");
  }
}

send.addEventListener("click", toSend);
