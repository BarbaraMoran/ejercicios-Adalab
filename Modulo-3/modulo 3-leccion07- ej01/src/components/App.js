import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeLanguage(event) {
    this.setState({ language: event.target.value });
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="title">Name:</label>
          <input
            id="title"
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />

          <textarea
            id="comments"
            name="comments"
            rows="8"
            cols="80"
            value={this.state.description}
            onChange={this.handleChangeDescription}
            placeholder="Descripción"
          />
          <select
            id="language"
            name="language"
            value={this.state.language}
            onChange={this.handleChangeLanguage}
          >
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </form>
        <h3>{this.state.name}</h3>
        <p>{this.state.description}</p>
        <h5>{this.state.language}</h5>
      </>
    );
  }
}

export default App;
