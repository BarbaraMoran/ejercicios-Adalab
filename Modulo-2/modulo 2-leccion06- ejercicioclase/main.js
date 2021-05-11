'use strict';

//Uso de constantes//
const resultElement = document.querySelector('.js-result');
const resultAge = document.querySelector('.js-age');

const m1 ="lola";
const m2 ="zeus";
const m3 ="toddy";
const m4 ="roro";

resultElement.innerHTML += `<li>${m1}</li>`;
resultElement.innerHTML+= `<li>${m2}</li>`;
resultElement.innerHTML += `<li>${m3}</li>`;
resultElement.innerHTML += `<li>${m4}</li>`;

//Arrays (forma básica)
const nameList = ["lola", "Zeus","Toddy", "Roro"];

console.log(nameList[2]);
console.log(nameList[3]);

//Array vacío e ir añadiendo(más usado) a medida que voy obteniendo el contenido que me interesa meter.

const ageList = [];
ageList[0] = 20;
ageList[1] = 30;
ageList[2] = 45;
ageList[3] = 33;
console.log(ageList);

//resultAge.innerHTML += `<li>${ageList[0]}</li>`;


//Recoger array en el HTML con un bucle

//i++ ---> i = i+1;
for(let i = 0; i < ageList.length; i++) {
resultAge.innerHTML +=`<li>${ageList[i]}</li>`;
}

// FOR...OF (se puede usar el 98% de las veces, pero con él no podemos tener acceso al índice del ARRAY, nos pinta TODA la lista siempre, en forma ascendente)

for (const age of ageList) {
resultAge.innerHTML +=`<li>${age}</li>`;
}


//Array con objeto dentro

const sectionElement = document.querySelector('.js-adalabers');

const adalabers = [
    {
        name: "julia",
        city: "madrid",
        address: {
            country: "España",
            zp: 2080,
        }
    },

    {
        name: "marina",
        city: "murcia",
        address: {
            country: "España",
            zp: 2080,
        }
    },

    {
        name: "marcela",
        city: "barcelona",
        address: {
            country: "España",
            zp: 2080,
        }
    },
]

for(let i = 0; i < adalabers.length; i++) {
    sectionElement.innerHTML +=`<p>El nombre es ${adalabers [i].name} y la ciudad es ${adalabers[i].city}
    ${adalabers[i].address.country}</p>`
};



for (const adalaberElement of adalabers) {
    sectionElement.innerHTML +=`<p>El nombre es ${adalaberElement.address.country}</p>
};