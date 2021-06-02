import React from "react";

const OnChangeListener = (event) => {
  if (event.target.value.toLowerCase().includes("cebolla")) {
    alert("Odio la cebolla");
  }
};

const alertTextArea = (
  <textarea
    onChange={OnChangeListener}
    id="comments"
    name="comments"
    rows="8"
    cols="80"
    placeholder="escribe cebolla si te mola la cebolla"
  />
);

class OnionHater extends React.Component {
  render() {
    return alertTextArea;
  }
}

export default OnionHater;
