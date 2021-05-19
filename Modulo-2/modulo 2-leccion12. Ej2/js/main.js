"use strict";

const formEl = document.querySelector(".js-form");
const img1 = document.querySelector(".js-img1");
const selectEl = document.querySelector(".js-select");

function changeCity(event) {
  const selectedCity = event.target;
  console.log(selectedCity.value);
  if (selectedCity.value === "aldeaPitufa") {
    const img1 = document.querySelector(".js-img1");
    img1.src =
      "https://www.adeccorientaempleo.com/wp-content/uploads/2016/03/adecco-series-de-dibujos-animados-que-te-ensenaran-a-mejorar-en-tus-negocios-800x580.jpg";
  } else if (selectedCity.value === "hollywoo") {
    img1.src =
      "https://i2.wp.com/hollywoodsign.org/wp-content/uploads/2020/03/bu7njwa1qv441.jpg?resize=642%2C335&ssl=1";
  } else {
    img1.src =
      "https://www.soriaestademoda.org/wp-content/uploads/2020/04/Soria-Capital.jpg";
  }
}

selectEl.addEventListener("change", changeCity);
