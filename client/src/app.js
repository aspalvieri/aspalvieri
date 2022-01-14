import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/partials/navigation";
import Footer from "./components/partials/footer";

import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import APIs from "./components/pages/apis";
import "./scss/styles.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/apis" component={APIs} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
