"use strict";

//CON NUESTRO AMIGO MAP
const marks = [5, 4, 6, 7, 9];

const addOne = (mark) => mark + 1;
const inflatedMarks = marks.map(addOne);

console.log(inflatedMarks);

//BUCLE Y ARRAY TRADICIONAL
/*const marks = [5, 4, 6, 7, 9];
const inflatedMarks = [];

function add1point() {
  for (let i = 0; i < marks.length; i++) {
    //marks[i] += 1;
    //inflatedMarks.push(marks[i]);
    inflatedMarks.push(marks[i] + 1);
  }
}

add1point();
console.log(inflatedMarks);
*/

//EJEMPLO DE FUNCIÓN ARROW
/*const sum = (a, b) => {
  return a + b;
};
*/
