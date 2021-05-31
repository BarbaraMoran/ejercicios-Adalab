import React from "react";
import "../stylesheets/App.scss";
import MediaCard from "./MediaCard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard />
      </div>
    );
  }
}

export default App;
