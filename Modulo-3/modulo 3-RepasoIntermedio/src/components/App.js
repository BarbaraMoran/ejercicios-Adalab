import React from "react";
import "../stylesheets/App.scss";
import "../stylesheets/ClubList.scss";
import "../stylesheets/Club.scss";
import ClubList from "./ClubList";
import clubs from "../data/clubs.json";

const App = () => {
  return (
    <div className="App">
      <ClubList clubsData={clubs} />
    </div>
  );
};

export default App;
