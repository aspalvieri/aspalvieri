import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

//Importing bootstrap js
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/property_manager" element={<PropertyManager />} />
            <Route path="/projects/forgotten_space" element={<ForgottenSpace />} />
            <Route path="/projects/city_defense" element={<CityDefense />} />
            <Route path="/projects/equation_game" element={<EquationGame />} />
            <Route path="/apis" element={<APIs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
