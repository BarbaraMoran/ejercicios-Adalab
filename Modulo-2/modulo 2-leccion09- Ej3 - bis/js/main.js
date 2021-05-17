"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenNumbers = [];
const threeMultiple = [];

function bestLostNumbers() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      evenNumbers.push(lostNumbers[i]);
    }
    if (lostNumbers[i] % 3 === 0) {
      threeMultiple.push(lostNumbers[i]);
    }
  }

  return evenNumbers.concat(threeMultiple);
}

console.log(bestLostNumbers());
