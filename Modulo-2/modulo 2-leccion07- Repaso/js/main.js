'use strict';

const bigFace = document.querySelector(".js-h1");
const selectFace= document.querySelector(".js-select");
const button = document.querySelector(".js-button");
const backgroundEl = document.querySelector(".js-body");

//Mostrar cara escogida en el HTML

function refreshFace () {
    if (selectFace.value !== 'happy') {
        bigFace.innerHTML = ':(';
    }

    else {
        bigFace.innerHTML = ':)';
    }
}

//generar nº random entre 0 y 100

function generateRandomNumber() {
    // 0 .. 100
    const number = Math.round(     Math.random() * 100    );
    return number;
}


//Cambiar fondo (si el nº random obtenido es par será un color, si es impar, será otro)

function changeBackground () {
    const randomNumber = generateRandomNumber();
    console.log(randomNumber);

    if (randomNumber % 2 == 0) {
       backgroundEl.classList.add("yellow");
       backgroundEl.classList.remove("orange", "blue");
    }

    else {
       backgroundEl.classList.add("orange");
       backgroundEl.classList.remove("yellow", "blue");
        
    }
}

//Función que ejecuta todas las funciones con un único button.addEvent.Listener

function handleButton () {
    refreshFace();
    generateRandomNumber(),
    changeBackground ();
}

button.addEventListener('click', handleButton);