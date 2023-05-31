import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import News from "./News";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to={"/Home"}>Home</Link>
            </li>
            <li>
              <Link to={"/News"}>News</Link>
            </li>
            <li>
              <Link to={"/Contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/About"}>About</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/News">
              <News />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navbar;
