import React from "react";
import tigre from "../images/tigre.png";

class MediaCard extends React.Component {
  render() {
    const topCard = (
      <div className="top__card">
        <img className="card__img" src={tigre} alt="tiger" title="tiger" />
        <div className="top__titles">
          <h2 className="card__name">Bárbara</h2>
          <h5 className="card__date">Domingo 30 de mayo de 2021</h5>
        </div>
      </div>
    );

    const text = (
      <p className="card__text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi.
      </p>
    );

    const bottomCard = (
      <div className="botton__card">
        <p className="card-more-text">Leer más</p>
        <div className="likes-container">
          <span className="number">25</span>
          <i class="fas fa-heart"></i>
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
  }
}

export default MediaCard;

//OPCIÓN CON ARROW FUNCTION//
/*const topCard = (
  <div className="top__card">
    <img className="card__img" src={tigre} alt="tiger" title="tiger" />
    <div className="top__titles">
      <h2 className="card__name">Bárbara</h2>
      <h5 className="card__date">Domingo 30 de mayo de 2021</h5>
    </div>
  </div>
);

const text = (
  <p className="card__text">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
    dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
    dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
    dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
    feugait nulla facilisi.
  </p>
);

const bottomCard = (
  <div className="botton__card">
    <p className="card-more-text">Leer más</p>
    <div className="likes-container">
      <span className="number">25</span>
      <i class="fas fa-heart"></i>
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

const MediaCard = () => card;
export default MediaCard; */
