import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const backgroundEl = document.querySelector(".js-background");
    if (event.target.value.toLowerCase().includes("cebolla")) {
      this.isHating = true;
      backgroundEl.classList.add("red");
      backgroundEl.classList.remove("white");
    } else {
      this.isHating = false;
      backgroundEl.classList.add("white");
    }

    this.forceUpdate();
  }
  render() {
    return (
      <textarea
        onChange={this.handleChange}
        id="comments"
        name="comments"
        rows="8"
        cols="80"
        placeholder="escribe cebolla si te mola la cebolla"
      />
    );
  }
}

export default OnionHater;
