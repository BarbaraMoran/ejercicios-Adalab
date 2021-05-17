"use strict";

//1.Ejercicio bien versión 1

const img = document.querySelector(".js-img");
const img2 = document.querySelector(".js-img2");
const btn = document.querySelector(".js-dog");
const btn2 = document.querySelector(".js-dog2");

function getDogImage(event) {
  const botonEnElQueHeHechoClick = event.target;
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      if (botonEnElQueHeHechoClick.id === "dog1") {
        renderDog(img, data.message);
      } else {
        renderDog(img2, data.message);
      }
    });
}

function renderDog(element, image) {
  element.src = image;
  element.alt = "Un perro";
}

btn.addEventListener("click", getDogImage);
btn2.addEventListener("click", getDogImage); /*

/* Otras pruebas
/*
const processData = (data) => {
  if (botonEnElQueHeHechoClick.id === "dog1") {
    renderDog(img, data.message);
  } else {
    renderDog(img2, data.message);
  }
}

function getDogImage(event) {
  const botonEnElQueHeHechoClick = event.target;
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(processData);
}
*/ /*

/*
function getDogImage(event) {
  const botonEnElQueHeHechoClick = event.target;
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      if (botonEnElQueHeHechoClick.id === "dog1") {
        renderDog(img, data.message);
      } else {
        renderDog(img2, data.message);
        /*
        img2.src = data.message;
        img2.alt = "Un perro";
        */ /*
      }
    });
}

function renderDog(element, image) {
  element.src = image;
  element.alt = "Un perro";
}

btn.addEventListener("click", getDogImage);
btn2.addEventListener("click", getDogImage);
*/
