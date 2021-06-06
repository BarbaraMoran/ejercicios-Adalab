import React, { useState } from "react";
import "../stylesheets/App.scss";

const App = () => {
  const [number, setNumber] = useState(20);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <input type="button" value="DALE LIKE!!" onClick={handleClick} />
      <p>
        {number}
        <i className="fas fa-heart"></i>
      </p>
    </>
  );
};

export default App;
