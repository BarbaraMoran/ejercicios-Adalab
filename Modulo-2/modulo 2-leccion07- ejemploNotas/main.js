'use strict';

// En este ejemplo, vamos a tener una lista de puntuaciones y vamos a sumarlas para saber cuál será la puntuación final obtenida:
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

// Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
let acc = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < scores.length; i++) {
  acc += scores[i];
  // Sumamos a `acc` el valor actual del array en cada iteración del bucle
  // acc += arr[i] es igual a acc = acc + arr[i]
}

console.log('La puntuación final es ' + acc);
