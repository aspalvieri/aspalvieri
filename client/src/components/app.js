import React from "react";
import Routes from "./routes";
import MainNav from "./partials/mainNav";
import Footer from "./partials/footer";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Routes />
      <MainNav />
      <Footer />
    </div>
  );
}
