"use strict";
const adalabers = ["rocio", "silvia", "cinthya", "yosiri", "jana"];
const ages = [32, 26, 12, 30, 25];

//AÑADE AL ARRAY EN 5ª POSICIÓN
adalabers[5] = "Julia";

//PUSH AÑADE ELEMENTO AL FINAL DEL ARRAY
adalabers.push("barbara");
console.log(adalabers);

//CONCAT se pueden concatenar datos distintos.
const adalabersAges = adalabers.concat(ages);

//SLICE permite coger elementos de un array y meterlo en otro
//sacar desde Silvia hasta Yosiri.
//El 2º parámetro corresponde hasta donde quiero extraer, restándole 1.
const newAda = adalabers.slice(1, 4);
console.log(newAda);

//SPLICE para eliminar un elemento. Desde donde, y cuántos.
const deleteAda = ages.splice(2, 2);
console.log(deleteAda);
console.log(ages);
