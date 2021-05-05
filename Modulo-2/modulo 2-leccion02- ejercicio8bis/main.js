'use strict';
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dina = `<li>${firstDogName}<img src="${firstDogImage}"></li>`;
const luna = `<li>${secondDogName}<img src="${secondDogImage}"></li>`;
const lana = `<li>${thirdDogName}<img src="${thirdDogImage}"></li>`;

const dogList = document.querySelector('.js-dogList');
dogList.innerHTML = dina + luna + lana;





