import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Hospital from "./pages/Hospital";
import Prontuario from "./pages/Prontuario";
import Modulos from "./pages/Modulos";
import ModuloUm from "./pages/Modulo1";
import ModuloDois from "./pages/Modulo2";
import ModuloTres from "./pages/Modulo3";

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/hospital" component={Hospital} exact />
          <Route path="/prontuario" component={Prontuario} exact />
          <Route path="/modulos" component={Modulos} exact />
          <Route path="/modulo1" component={ModuloUm} exact />
          <Route path="/modulo2" component={ModuloDois} exact />
          <Route path="/modulo3" component={ModuloTres} exact />
        </Switch>
      </BrowserRouter>
    );
  }
