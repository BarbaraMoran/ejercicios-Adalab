import React from "react";
import User from "./User";

class UsersList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.usersData.map((user) => {
          return (
            <User
              name={user.name.first}
              picture={user.picture.medium}
              city={user.location.city}
              age={user.dob.age}
            />
          );
        })}
      </ul>
    );
  }
}

export default UsersList;
