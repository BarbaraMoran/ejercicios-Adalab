import React, { Component } from "react";
import "./App.css";

const data = {
  image:
    "https://i0.wp.com/hipersonica.com/wp-content/uploads/2014/05/bob-dylan-striped-shirt.jpg?resize=1024%2C1024&ssl=1resize/300x/",
  cardTitle: "Bob Dylan",
  cardDate: "May 24, 1941",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};

class App extends Component {
  render() {
    const topCard = (
      <div className="top__card">
        <img className="card__img" src={data.image} alt="tiger" title="tiger" />
        <div className="top__titles">
          <h2 className="card__name">{data.cardTitle}</h2>
          <h4 className="card__date">{data.cardDate}</h4>
        </div>
      </div>
    );

    const text = <p className="card__text">{data.cardDescription}</p>;

    const bottomCard = (
      <div className="botton__card">
        <a className="card-more-text" href={data.button.url}>
          {data.button.label}
        </a>
        <div className="likes-container">
          <span className="number">25</span>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    );

    const cardComponent = (
      <div className="background">
        <article className="background__card">
          {topCard} {text} {bottomCard}
        </article>
      </div>
    );

    return cardComponent;
  }
}

export default App;
