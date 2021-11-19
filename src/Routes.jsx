import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Login } from "components/routes";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
