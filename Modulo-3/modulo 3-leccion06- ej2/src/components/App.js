import React, { useState } from "react";
import "../stylesheets/App.scss";

const App = () => {
  const [likesNumber, setLikesNumber] = useState(20);
  const [beersNumber, setBeersNumber] = useState(0);

  const handleLikes = () => {
    setLikesNumber(likesNumber + 1);
  };

  const handleBeers = () => {
    setBeersNumber(beersNumber + 1);
  };

  return (
    <>
      <input type="button" value="DALE LIKE!!" onClick={handleLikes} />
      <p>
        {likesNumber}
        <i className="fas fa-heart"></i>
      </p>
      <input type="button" value="DAME 1 BIRRA!!" onClick={handleBeers} />
      <p>
        {beersNumber}
        <i className="fas fa-beer"></i>
      </p>
    </>
  );
};

export default App;
