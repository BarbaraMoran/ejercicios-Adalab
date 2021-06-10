import React from "react";

class UpdateButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    this.props.updateData();
  }

  render() {
    return <input type="button" value="get Info" onClick={this.handleButton} />;
  }
}

export default UpdateButton;
