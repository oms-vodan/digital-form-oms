import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Hospital from "./pages/Hospital";
import Prontuario from "./pages/Prontuario";
import ModuloUm from "./pages/Modulo1";

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/hospital" component={Hospital} exact />
          <Route path="/prontuario" component={Prontuario} exact />
          <Route path="/modulo1" component={ModuloUm} exact />
        </Switch>
      </BrowserRouter>
    );
  }
