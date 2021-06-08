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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const description = event.target.name;
    const language = event.target.name;
    console.log(language);

    this.setState({
      [name]: event.target.value,
      [description]: event.target.value,
      [language]: event.target.value,
    });
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <textarea
            id="comments"
            name="description"
            rows="8"
            cols="80"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Descripción"
          />
          <select
            id="language"
            name="language"
            value={this.state.language}
            onChange={this.handleChange}
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
