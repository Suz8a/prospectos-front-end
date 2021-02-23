import React from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Content from "./containers/content";
import SideBar from "./modules/side-bar";
import Section from "./containers/section";
import ProspectForm from "./modules/prospect-form";
import ProspectsList from "./modules/prospects-list";
import ProspectInfo from "./modules/prospect-info";
import Login from "./layouts/login";

export const Router = () => {
  const history = useHistory();

  function onOptionClick(url: string) {
    history.push(url);
  }
  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/main">
        <SideBar onOptionClick={(url) => onOptionClick(url)} />
      </Route>
      <Content>
        <Switch>
          <Route exact path="/prospects/new" component={ProspectForm} />
          <Route exact path="/prospects" component={ProspectsList} />
          <Route exact path="/prospect/:id" component={ProspectInfo} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Content>
    </>
  );
};
