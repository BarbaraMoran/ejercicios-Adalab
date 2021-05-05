'use strict';

const titleElement = document.querySelector('.title');
const listItem1 = document.querySelector('.item1');
const listItem2 = document.querySelector('.item2');
let selectedAdalaber = 'Fulanita';
selectedAdalaber = 'Menganita';


titleElement.innerHTML += selectedAdalaber;

//SOLUCIONES FALLIDAS
//titleElement.innerHTML = titleElement.innerHTML + '.item1;
//NO ENTIENDO POR QUÉ NO ME FUNCIONA ESTA -> titleElement.innerHTML = titleElement.innerHTML + listItem1;


