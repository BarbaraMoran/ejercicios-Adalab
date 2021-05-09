'use strict';
const pearsBasket = {};
pearsBasket.max = Number(10);
pearsBasket.min = Number(4);
pearsBasket.initial = Number(5);
pearsBasket.now = Number(2);

pearsBasket.addOne = function (){
    return (pearsBasket.now + Number(1))
    
}

pearsBasket.removeOne = function (){
    return this.now - 1
}

pearsBasket.reset = function (){
    return pearsBasket.initial
}

console.log(pearsBasket.addOne());
console.log(pearsBasket.removeOne());
console.log(pearsBasket.reset());

