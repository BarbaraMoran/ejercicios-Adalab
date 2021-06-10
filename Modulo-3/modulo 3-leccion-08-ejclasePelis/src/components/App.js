import React from "react";
import getDataFromAPI from "../services/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      filterTitle: "",
      filterLanguage: "",
    };
    this.renderSeries = this.renderSeries.bind(this);
    this.handlerFilterTitle = this.handlerFilterTitle.bind(this);
    this.handlerFilterLanguage = this.handlerFilterLanguage.bind(this);
    getDataFromAPI().then((data) => {
      console.log(data);
      this.setState({
        series: data,
      });
    });
  }
  renderSeries() {
    return this.state.series
      .filter((serie) => {
        return serie.show.name
          .toLowerCase()
          .includes(this.state.filterTitle.toLowerCase());
      })
      .filter((serie) => {
        return serie.show.language
          .toLowerCase()
          .includes(this.state.filterLanguage.toLowerCase());
      })
      .map((serie) => {
        return (
          <li key={serie.show.id}>
            {serie.show.name}
            <p>{"idioma:" + serie.show.language}</p>
          </li>
        );
      });
  }
  handlerFilterTitle(ev) {
    this.setState({
      filterTitle: ev.currentTarget.value,
    });
  }
  handlerFilterLanguage(ev) {
    this.setState({
      filterLanguage: ev.currentTarget.value,
    });
  }
  render() {
    return (
      <div>
        <p>Series</p>
        <input
          placeholder="buscar series por titulo"
          onChange={this.handlerFilterTitle}
        />
        <input
          placeholder="buscar series por idioma"
          onChange={this.handlerFilterLanguage}
        />
        <ul>{this.renderSeries()}</ul>
      </div>
    );
  }
}
export default App;
