import React from "react";

class User extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <img src={this.props.picture} alt="userPhoto" />
        <p>{this.props.city}</p>
        <p>{this.props.age}</p>
      </li>
    );
  }
}

export default User;
