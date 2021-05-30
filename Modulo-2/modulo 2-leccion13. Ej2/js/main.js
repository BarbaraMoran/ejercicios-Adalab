"use strict";

const girls = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];

const addHello = (girl) => `Bienvenida, ${girl}`;
const helloAll = girls.map(addHello);

console.log(helloAll);
