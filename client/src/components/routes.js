import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Projects from "./pages/projects";
import APIs from "./pages/apis";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/apis" component={APIs} />
    </Switch>
  );
}

export default Routes;
