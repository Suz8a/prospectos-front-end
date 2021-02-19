import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Content from "./containers/content";
import SideBar from "./modules/side-bar";
import Section from "./containers/section";
import NewProspect from "./modules/new-prospect";

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
          <Route exact path="/prospects/new" component={NewProspect} />
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
