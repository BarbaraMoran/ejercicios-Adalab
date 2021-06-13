import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Text from "./Text";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/text">textArea</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/text" component={Text} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
