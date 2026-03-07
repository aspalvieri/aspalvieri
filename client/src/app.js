import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/partials/navigation";
import Footer from "./components/partials/footer";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import ProjectDetail from "./components/pages/project_detail";
import APIs from "./components/pages/apis";
import PageNotFound from "./components/partials/404";
import ScrollToTop from "./components/modules/scrolltotop";
import "./assets/css/fontawesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <ScrollToTop />
        <main className="app-content" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/apis" element={<APIs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
