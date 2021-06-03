import React from "react";
import "../stylesheets/App.scss";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      img: "",
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
      let moreImg;
      if (prevState.img === "") {
        moreImg = (
          <img src="https://lh3.googleusercontent.com/proxy/KHysHGytE0HlSB6_j1Eu6hYZdkE6L9GyS3v8i38D2JjQTwLpGbd2MxmZiJEMnAv47tu_kj3SszD4wgikGP1IXWVGldgnUHg" />
        );
        //no sirve, incompleto :(
      } else {
        moreImg = prevState.img;
      }

      return {
        number: newNumber,
        img: moreImg,
      };
    });
  }

  render() {
    return (
      <>
        <input type="button" value="CuentaOvejas" onClick={this.handleClick} />
        <h1>{this.state.number}</h1>
        {this.state.img}
      </>
    );
  }
}

export default SheepCounter;
