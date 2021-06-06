import React from "react";
import "../stylesheets/App.scss";
import SheepCounter from "./SheepCounter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let newNumber = prevState.number + 1;

      return {
        number: newNumber,
      };
    });
  }

  render() {
    return (
      <>
        <SheepCounter
          handleClick={this.handleClick}
          stateNumber={this.state.number}
        />
      </>
    );
  }
}

export default App;
