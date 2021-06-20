import React from "react";
import "../stylesheets/App.scss";
import ClubList from "./ClubList";
import clubs from "../data/clubs.json";

const App = () => {
  return (
    <div className="App">
      <h1 className="title"> Mis clubes favoritos</h1>
      <ClubList clubsData={clubs} />
    </div>
  );
};

export default App;
