import React from "react";
import "../stylesheets/App.css";

const Preview = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <h4>{props.language}</h4>
      <p>{props.genres}</p>
    </>
  );
};

export default Preview;
