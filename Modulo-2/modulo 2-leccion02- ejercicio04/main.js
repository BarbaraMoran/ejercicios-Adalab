'use strict';
let totalAccount = 128;
let extraSake = 2;
let people = 9;
const separateBill = ( (totalAccount - extraSake) / people);
const anasBill = separateBill + extraSake;

console.log(separateBill);
console.log(anasBill);

const dinnerPrice = document.querySelector('.dinnerprice');
const sakePrice = document.querySelector('.sakeprice');
const friends = document.querySelector('.friends');
const separatePrice = document.querySelector('.separateprice');
const anasDebt = document.querySelector('.anasdebt');

dinnerPrice.innerHTML += totalAccount;
sakePrice.innerHTML += extraSake;
friends.innerHTML += people;
separatePrice.innerHTML += separateBill;
anasDebt.innerHTML += anasBill;