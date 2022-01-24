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
import PageNotFound from "./components/partials/404";
import ScrollToTop from "./components/modules/scrolltotop";

//Importing fontawesome, bootstrap, and custom css
import "./assets/css/fontawesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";

//Importing jquery and boostrap js
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/property_manager" component={PropertyManager} />
            <Route exact path="/projects/forgotten_space" component={ForgottenSpace} />
            <Route exact path="/projects/city_defense" component={CityDefense} />
            <Route exact path="/projects/equation_game" component={EquationGame} />
            <Route exact path="/apis" component={APIs} />
            <Route path="*" component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
