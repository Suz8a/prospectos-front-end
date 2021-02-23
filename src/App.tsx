import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Router } from "./router";
import Login from "./layouts/login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={Router} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
