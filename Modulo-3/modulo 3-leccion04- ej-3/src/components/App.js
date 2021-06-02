import React from "react";
import OnionHater from "./OnionHater";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="js-background white">
        <OnionHater />
      </div>
    );
  }
}

export default App;
