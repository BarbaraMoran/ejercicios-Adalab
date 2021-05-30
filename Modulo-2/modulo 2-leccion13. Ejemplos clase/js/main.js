"use strict";

//INDEXOF te dice en qué posición del array esta el valor que buscas (64).

const numbers = [14, 12, 21, 64, 23, 12];

const indice = numbers.indexOf(64);

console.log(indice);
//si buscas un elemento que no está en el array, te contesta -1.

//Esta sería la función interna para un indexOf
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 64) {
    console.log("posición usando for: " + i);
  }
}

//En un array de objetos no podemos usar indexOf. Usaremos findIndex y Find
const students = [
  {
    id: "id-1",
    name: "Sofía",
    age: 20,
  },
  {
    id: "id-2",
    name: "María",
    age: 20,
  },
  {
    id: "id-3",
    name: "Lucía",
    age: 22,
  },
];

//FindIndex encuentra la posición de un elemento que estoy buscando. Como parámetro le paso una función con cualquier condición que a mi se me ocurra. Solo nos devuelve el primero que cumpla la condición (si queremos más usaremos "filter"). ToLower case sirve para transformar en minúsculas.

const nombreBuscado = "lucía";

const luciaStudent = students.findIndex(
  (student) => student.name.toLowerCase() === nombreBuscado.toLowerCase()
);

console.log("Posición estudiante Lucía: " + luciaStudent);

//para QUITAR un elemento del array usamos splice. Decimos la posición y el nº de elementos que queremos sacar.
students.splice(luciaStudent, 1);

console.log(students);

//FIND obtiene el contenido de la posición que nos interese. Nos devuelve 1 elemento. El primero que encuentre. Si queremos que nos devuelva más usaremos FILTER.

const studentInfo = students.find((student) => student.age === 20);
console.log("estudiante de 20 años: " + studentInfo.name);

//Métodos--> nombre del array + nombre del método + función que quieras ejecutar. Filter: nos devuelve un array con todos los elementos que cumplan la condición expresada en la función.

const age = 20;
const arrayFilter = students.filter((student) => student.age === age);

//pintar en la consola
const ulEl = document.querySelector(".js-students");
const hTitle = document.querySelector(".js-h2");

function paintFilter() {
  hTitle.innerHTML += "Las estudiantes de 20 años son: ";

  for (const filter of arrayFilter) {
    const liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    const textElement = document.createTextNode(filter.name);
    liEl.appendChild(textElement);
  }
}

paintFilter();

console.log(arrayFilter);

//.MAP retorna mi array transformado (con la función que me interese). Queremos añadir a cada nmbre un "adalaber"

const arrayTransform = students.map((student) => `${student.name} adalaber`);

console.log(arrayTransform);
