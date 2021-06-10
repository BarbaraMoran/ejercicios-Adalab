import React from "react";
import App from "./App2";
import Item from "./Item";

const App = () => {
  return (
    <div>
      <Item id="1" email="example@gmail.com" name="Periquita"></Item>
    </div>
  );
};

export default App;

const numbers = [1, 2, 3];

//como lo hacíamos antes
const number1 = numbers[0];
const number2 = numbers[1];
const number3 = numbers[2];

//destructuring
const [, number2, number3] = numbers;
console.log(number2);

export default App;