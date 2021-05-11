'use strict';
const pearsBasket = {
max: 10,
min: 4,
initial: 5,
now: 2,
};

pearsBasket.addOne = function (){
    if (this.now < this.max) {
        this.now = this.now + 1
    }
    return this.now
}

pearsBasket.removeOne = function (){
    this.now = this.now - 1
    return this.now
}

pearsBasket.reset = function (){
    this.now = this.initial
    return this.now
}

console.log(pearsBasket.addOne());
console.log(pearsBasket.removeOne());
console.log(pearsBasket.reset());

