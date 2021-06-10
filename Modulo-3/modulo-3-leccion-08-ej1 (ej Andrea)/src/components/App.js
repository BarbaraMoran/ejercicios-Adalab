import React from "react";
import { fetchUsers } from "./services/UsersService";
import UsersList from "./UsersList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
    };

    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch(event) {
    event.preventDefault();
    fetchUsers() // Continuamos añadiendo .then() a la Promise del fetch
      .then((data) => {
        const filteredData = data.results.filter(
          (user) => user.location.country === event.target.value
        );
        this.setState({
          usersData: filteredData,
        });
        console.log(filteredData);
      });
  }

  render() {
    return (
      <section>
        <form onClick={this.handleFetch}>
          <fieldset>
            <label htmlFor="Germany">
              <input type="checkbox" name="Germany" value="Germany" />
              Germany
            </label>
            <label htmlFor="Norway">
              <input type="checkbox" name="Norway" value="Norway" />
              Norway
            </label>
            <label htmlFor="United States">
              <input
                type="checkbox"
                name="United States"
                value="United States"
              />
              United States
            </label>
            <label htmlFor="Denmark">
              <input type="checkbox" name="Denmark" value="Denmark" />
              Denmark
            </label>
          </fieldset>

          {/* <fieldset>
            <label htmlFor="male">
              <input type="checkbox" name="male" value="male" />
              male
            </label>
            <label htmlFor="female">
              <input type="checkbox" name="female" value="male" />
              female
            </label>
         </fieldset>*/}
        </form>
        <UsersList usersData={this.state.usersData} />
      </section>
    );
  }
}

export default App;
