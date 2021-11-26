import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Login, Boards } from "components/routes";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/boards">
        <Boards />
      </Route>
    </Switch>
  );
};

export default Routes;
