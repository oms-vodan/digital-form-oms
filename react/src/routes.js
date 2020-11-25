import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Hospital from "./pages/Hospital";
import Prontuario from "./pages/Prontuario";
import Modulos from "./pages/Modulos";
import Formulario from "./pages/Formulario";

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/cadastro" component={Cadastro} exact />
          <Route path="/hospital" component={Hospital} exact />
          <Route path="/prontuario" component={Prontuario} exact />
          <Route path="/modulos" component={Modulos} exact />
          <Route path="/Formulario" component={Formulario} exact />
        </Switch>
      </BrowserRouter>
    );
  }
