import React from "react";
import SheepImg from "./SheepImg";

class SheepCounter extends React.Component {
  render() {
    const sheeps = [];
    for (let i = 0; i < this.props.stateNumber; i++) {
      sheeps.push(<SheepImg />);
    }

    return (
      <>
        <input
          type="button"
          value="CuentaOvejas"
          onClick={this.props.handleClick}
        />
        <h1>{this.props.stateNumber}</h1>
        {sheeps}
      </>
    );
  }
}

export default SheepCounter;
