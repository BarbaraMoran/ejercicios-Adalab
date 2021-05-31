import React from "react";
import "../stylesheets/App.scss";
import MediaList from "./MediaList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaList />
      </div>
    );
  }
}

export default App;
