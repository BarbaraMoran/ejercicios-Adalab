import React, { useState } from "react";
import "../stylesheets/App.scss";
import Button from "./Button";
import Preview from "./Preview";

const App = () => {
  const [number, setNumber] = useState(20);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <Button handleClick={handleClick} />
      <Preview number={number} />
    </>
  );
};

export default App;
