import React from "react";
import fetchUsers from "../services/UsersService";
//import UsersList from "./UsersList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      filterCountry: "",
      filterGender: "",
      isLoading: true,
    };

    fetchUsers().then((data) => {
      console.log(data);
      this.setState({
        usersData: data,
        isLoading: false,
      });
    });

    this.handleFilterCountry = this.handleFilterCountry.bind(this);
    this.handleFilterGender = this.handleFilterGender.bind(this);
  }

  handleFilterCountry(ev) {
    this.setState({
      filterCountry: ev.target.value,
    });
  }

  handleFilterGender(ev) {
    this.setState({
      filterGender: ev.target.value,
    });
  }

  renderUsersList() {
    return this.state.usersData
      .filter((user) => {
        return user.country
          .toLowerCase()
          .includes(this.state.filterCountry.toLowerCase());
      })
      .filter((user) => {
        return user.gender
          .toLowerCase()
          .includes(this.state.filterGender.toLowerCase());
      })

      .map((user) => {
        return (
          <li>
            <h4>Nombre: {user.name} </h4> <img src={user.image} />{" "}
            <h5>{user.gender}</h5>
            <h5>{user.city}</h5>
          </li>
        );
      });
  }

  render() {
    return (
      <section>
        <p>{this.state.isLoading ? "Cargando.." : ""}</p>
        <form>
          <input
            type="text"
            placeholder="Búsqueda por país"
            onChange={this.handleFilterCountry}
          ></input>
          <input
            type="text"
            onChange={this.handleFilterGender}
            placeholder="Búsqueda por género"
          />
        </form>

        <ul>{this.renderUsersList()}</ul>
      </section>
    );
  }
}

export default App;
