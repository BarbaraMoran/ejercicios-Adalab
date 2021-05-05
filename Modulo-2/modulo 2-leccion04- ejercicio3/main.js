'use strict';
function tellPrices(num) {
   const totalPrice = (num * 0.21) + num;
   const result= `Precio sin IVA: ${num} euros (+ IVA 21% = ${totalPrice} euros)`;
   return result
}

let tellNewPrice = tellPrices(12);
//tellNewPrice = tellPrices(50) (no se actualiza con esto)

console.log(tellNewPrice)

