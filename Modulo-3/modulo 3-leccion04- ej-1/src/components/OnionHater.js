import React from "react";

class OnionHater extends React.Component {
  /*constructor(props) {
    super(props);
    this.OnChangeListener = this.OnChangeListener.bind(this);
  }*/
  OnChangeListener = (event) => {
    if (event.target.value.toLowerCase().includes("cebolla")) {
      alert("Odio la cebolla");
    }
  };

  render() {
    const alertTextArea = (
      <textarea
        onChange={this.OnChangeListener}
        id="comments"
        name="comments"
        rows="8"
        cols="80"
        placeholder="escribe cebolla si te mola la cebolla"
      />
    );
    return alertTextArea;
  }
}

export default OnionHater;
