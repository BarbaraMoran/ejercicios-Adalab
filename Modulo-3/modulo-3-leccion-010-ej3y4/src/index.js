import "./stylesheets/index.scss";
import App from "./components/App";
import React from "react"; //importar la librería de react
import ReactDOM from "react-dom"; //importar react-dom para que react genere el html
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
