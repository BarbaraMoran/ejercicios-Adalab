import React from "react";
import "../stylesheets/App.scss";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let newNumber;
      if (prevState.number === 0) {
        newNumber = prevState.number + 1;
      } else {
        newNumber = prevState.number + 1;
      }

      return {
        number: newNumber,
      };
    });
  }
  render() {
    return (
      <>
        <input type="button" value="CuentaOvejas" onClick={this.handleClick} />
        <h1>{this.state.number}</h1>
      </>
    );
  }
}

export default SheepCounter;
