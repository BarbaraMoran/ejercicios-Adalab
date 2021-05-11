'use strict';

// Lista de contactos (array con objetos dentro)
const contacts = [
  {
    name: 'Raquel',
    phone: '915552323',
    email: 'raquel@inbox.com'
  },
  {
    name: 'Pedro',
    phone: '915554564',
    email: 'pedro@inbox.com'
  },
  {
    name: 'Laura',
    phone: '915555656',
    email: 'raquel@inbox.com'
  }
];

console.log(contacts[0].name); // Muestra el nombre del primer contacto (Raquel)
contacts[2].email = 'laura@inbox.com'; // Cambia el email del tercer contacto
console.log(contacts[2].email); // Muestra el email del tercer contacto ('laura@inbox.com')

// Tarea con participantes (objeto con array dentro)
const task = {
  name: 'Crear un repositorio',
  participants: ['Raquel', 'Pedro', 'Laura']
};

console.log(task.participants[0]); // Muestra el nombre del primer participante (Raquel)
task.participants.push('Diego'); // Añade un nuevo participante a la lista
task.participants[4] ='Ricardo'; // Añade un nuevo participante a la lista
task.participants[0] = 'Andrea'; // Cambia el nombre del primer participante
console.log(task.participants); // Muestra Andrea, Pedro, Laura, Diego y Ricardo

