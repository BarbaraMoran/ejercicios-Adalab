"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

const pairNumbers = [];
const threeMultiple = [];

function bestLostNumber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      pairNumbers.push(lostNumbers[i]);
    }
  }
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      threeMultiple.push(lostNumbers[i]);
    }
  }

  return pairNumbers.concat(threeMultiple);
}

console.log(bestLostNumber());
console.log(pairNumbers);
console.log(threeMultiple);

/*
const lostNumbers = [4, 8, 15, 16, 23, 42];
const pairNumbers = [];
const threeMultiple = [];

function even() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      pairNumbers.push(lostNumbers[i]);
    }
  }
}

function multipleThree() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      threeMultiple.push(lostNumbers[i]);
    }
  }
}

function concatArray() {
  return pairNumbers.concat(threeMultiple);
}

function bestLostNumber() {
  even();
  multipleThree();
  concatArray();
}

console.log(bestLostNumber());
console.log(pairNumbers);
console.log(threeMultiple);


*/
