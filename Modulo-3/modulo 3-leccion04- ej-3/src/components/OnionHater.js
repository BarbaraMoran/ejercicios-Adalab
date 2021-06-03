import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value.toLowerCase().includes("cebolla")) {
      this.isHating = true;
      this.forceUpdate();
    } else {
      this.isHating = false;
      this.forceUpdate();
    }
  }
  render() {
    const className =
      this.isHating === true ? "red js-background " : "white js-background ";
    return (
      <div className={className}>
        <textarea
          onChange={this.handleChange}
          id="comments"
          name="comments"
          rows="8"
          cols="80"
          placeholder="escribe cebolla si te mola la cebolla"
        />
      </div>
    );
  }
}

export default OnionHater;
