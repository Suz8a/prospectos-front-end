import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Content from "./containers/content";
import SideBar from "./modules/side-bar";
import Section from "./containers/section";

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
          <Route
            exact
            path="/prospects/new"
            component={() => <div>new prospecto</div>}
          />
          <Route
            exact
            path="/prospects"
            component={() => <div>todos los prospectos</div>}
          />
        </Switch>
      </Content>
    </Section>
  );
};
