import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import "./App2.css";
import "./Project1.css";
import "./Project2.css";
// import "./Project3.css";
import "./Project4.css";
import "./TransitionCss.css";

import MainPage from "./components/MainPage";
import Project1 from "./components/projects/Project1";
import Project2 from "./components/projects/Project2";
import Project3 from "./components/projects/Project3";
import Project4 from "./components/projects/Project4";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/project1" component={Project1} />
              <Route path="/project2" component={Project2} />
              <Route path="/project3" component={Project3} />
              <Route path="/project4" component={Project4} />
            </Switch>
          </React.Fragment>
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
