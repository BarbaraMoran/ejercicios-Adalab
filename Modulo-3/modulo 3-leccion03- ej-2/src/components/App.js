import React from "react";
import "../stylesheets/App.scss";
import Halfpage from "./HalfPage";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Halfpage className="left">
          <h1>Estoy a la izquierda</h1>
        </Halfpage>
        <Halfpage className="right">
          <h1>Estoy a la derecha</h1>
        </Halfpage>
      </div>
    );
  }
}

export default App;
