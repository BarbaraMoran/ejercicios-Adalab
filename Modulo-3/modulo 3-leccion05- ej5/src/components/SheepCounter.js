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
      let pepino = prevState.number + 1;

      return {
        number: pepino,
      };
    });
  }

  render() {
    const sheeps = [];
    for (let i = 0; i < this.state.number; i++) {
      sheeps.push(
        <img
          width="35px"
          src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png"
          alt="sheep-cartoon"
        />
      );
    }
    return (
      <>
        <input type="button" value="CuentaOvejas" onClick={this.handleClick} />
        <h1>{this.state.number}</h1>
        {sheeps}
      </>
    );
  }
}

export default SheepCounter;
