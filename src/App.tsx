import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Router } from "./router";
import Login from "./layouts/login";
import { setToken, setUser } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { username } = useSelector<any, any>((state) => state);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      dispatch(setUser(localStorage.getItem("username") || ""));
      dispatch(setToken(localStorage.getItem("access_token") || ""));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        {username ? (
          <>
            <Route path="/main" component={Router} />
            <Redirect to="/main" />
          </>
        ) : (
          <>
            <Route exact path="/login" component={Login} />
            <Redirect to="/login" />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
