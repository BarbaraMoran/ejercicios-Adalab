'use strict';


/*const numbers = [5, 10, 4, 8, 6, 10];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
  acc+= numbers[i] / numbers.length;

} 

console.log('La media es ' + acc);*/


const numbers = [10,5,4,7,9,9,9,7,9];


function average (numbers) {
  let acc = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    acc+= numbers[i] 
  
  } 
  
  return(acc/ numbers.length);
}

console.log(average(numbers));
console.log(   average( [5,7,9] )   );

const barbara = [4,6,8,4,2,7];
console.log( average(barbara) );


