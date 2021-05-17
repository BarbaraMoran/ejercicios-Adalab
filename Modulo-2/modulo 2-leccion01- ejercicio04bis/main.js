"use strict";

const titleElement = document.querySelector(".js-title");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
let selectedAdalaber = item1;
selectedAdalaber = item2;

titleElement.innerHTML += selectedAdalaber.innerHTML;
