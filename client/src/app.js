import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/partials/navigation";
import Footer from "./components/partials/footer";

import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import PropertyManager from "./components/projects/property_manager";
import ForgottenSpace from "./components/projects/forgotten_space";
import CityDefense from "./components/projects/city_defense";
import EquationGame from "./components/projects/equation_game";
import APIs from "./components/pages/apis";

import "./styles/styles.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/property_manager" component={PropertyManager} />
            <Route exact path="/projects/forgotten_space" component={ForgottenSpace} />
            <Route exact path="/projects/city_defense" component={CityDefense} />
            <Route exact path="/projects/equation_game" component={EquationGame} />
            <Route exact path="/apis" component={APIs} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
