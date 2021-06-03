import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "blue",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let newStyle;
      if (prevState.style === "blue") {
        newStyle = "red";
      } else {
        newStyle = "blue";
      }

      return {
        style: newStyle,
      };
    });
  }

  render() {
    return (
      <div className={`square ${this.state.style}`} onClick={this.handleClick}>
        Click aquí
      </div>
    );
  }
}

export default App;
