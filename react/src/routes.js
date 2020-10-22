import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Hospital from "./pages/Hospital";

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/hospital" component={Hospital} exact />
        </Switch>
      </BrowserRouter>
    );
  }
