'use strict';
const adalaber1 = {}
    adalaber1.name = 'Susana',
    adalaber1.age = 34,
    adalaber1.job = 'periodista';
    adalaber1.run = phrase => `${phrase}`;
    adalaber1.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} kms`;


const text = document.querySelector('.js-p');
text.innerHTML +=`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;
console.log(adalaber1.run('Estoy corriendo'));
console.log(adalaber1.runAMarathon(50));


