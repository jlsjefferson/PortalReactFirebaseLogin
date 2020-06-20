import React from "react";
import {Route, Switch, HashRouter } from "react-router-dom";
import Login from "./Login";
import { AuthProvider } from "./firebase/Auth";
import PrivateRoute from "./firebase/PrivateRoute";
import Welcome from './Home/index'

const Routes = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Switch>
            <PrivateRoute Route path="/Welcome" component={Welcome} />
            <Route path="/" component={Login} />
        </Switch>
        </HashRouter>
    </AuthProvider>
  );
};

export default Routes;