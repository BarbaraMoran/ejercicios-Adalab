import React from "react";

//OPCIÓN CON ARROW FUNCTION//
const MediaCard = (props) => {
  const topCard = (
    <div className="top__card">
      <img className="card__img" src={props.img} alt="Pippi" title="Pippi" />
      <div className="top__titles">
        <h2 className="card__name">{props.name}</h2>
        <h5 className="card__date">{props.date}</h5>
      </div>
    </div>
  );

  const text = <p className="card__text">{props.description}</p>;

  const bottomCard = (
    <div className="botton__card">
      <p className="card-more-text">Leer más</p>
      <div className="likes-container">
        <span className="number">{props.likes}</span>
        <i class={props.heart}></i>
      </div>
    </div>
  );

  const card = (
    <div className="background">
      <article className="background__card">
        {topCard} {text} {bottomCard}
      </article>
    </div>
  );

  return card;
};

export default MediaCard;
