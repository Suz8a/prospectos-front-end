import React from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Content from "./containers/content";
import SideBar from "./modules/side-bar";
import Section from "./containers/section";
import ProspectForm from "./modules/prospect-form";
import ProspectsList from "./modules/prospects-list";

export const Router = () => {
  const history = useHistory();

  function onOptionClick(url: string) {
    history.push(url);
  }
  return (
    <Section>
      <SideBar onOptionClick={(url) => onOptionClick(url)} />
      <Content>
        <Switch>
          <Route exact path="/prospects/new" component={ProspectForm} />
          <Route exact path="/prospects" component={ProspectsList} />
          <Route exact path="/">
            <Redirect to="/prospects" />
          </Route>
        </Switch>
      </Content>
    </Section>
  );
};
