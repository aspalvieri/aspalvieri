import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import APIList from "./pages/apilist";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/apilist" component={APIList} />
    </Switch>
  );
}

export default Routes;
