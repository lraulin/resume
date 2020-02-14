import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
