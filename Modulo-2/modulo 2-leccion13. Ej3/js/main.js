"use strict";

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const addSpecialHello = (user) => {
  if (user.isPremium) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
  } else {
    return `Bienvenida, ${user.name}`;
  }
};

const helloAll = users.map(addSpecialHello);
console.log(helloAll);

//SOLUCIÓN PATRICIA V//
/*const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];

const hiUsers = users.map(user=>{
    
    if(user.isPremium === true){
        return `Hola ${user.name}. Gracias por confiar en nosotros.`;
    } else {
        return `Hola ${user.name}.`;
    }
})

console.log(hiUsers);
*/
