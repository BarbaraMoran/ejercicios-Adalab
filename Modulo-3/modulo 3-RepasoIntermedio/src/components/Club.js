import React from "react";
import "../stylesheets/Club.scss";

const Club = (props) => {
  return (
    <li className="list__item">
      <i className={`icon ${props.icon}`} />
      <div>
        <h2 className="item__title">{props.name}</h2>
        <ul className="item__members">
          Members:
          <li>{props.members.join(" , ")} </li>
        </ul>
      </div>
    </li>
  );
};

export default Club;
