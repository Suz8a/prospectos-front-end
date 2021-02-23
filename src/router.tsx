import React from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Content from "./containers/content";
import SideBar from "./modules/side-bar";
import Section from "./containers/section";
import ProspectForm from "./modules/prospect-form";
import ProspectsList from "./modules/prospects-list";
import ProspectInfo from "./modules/prospect-info";
import { useSelector } from "react-redux";

export const Router = () => {
  const history = useHistory();
  const { username } = useSelector<any, any>((state) => state);
  function onOptionClick(url: string) {
    history.push(url);
  }
  console.log(username);
  return (
    <Section>
      <SideBar onOptionClick={(url) => onOptionClick(url)} />
      <Content>
        <Switch>
          {username === "promotor" ? (
            <>
              <Route exact path="/main/prospects" component={ProspectsList} />
              <Route path="/main/prospects/new" component={ProspectForm} />
              <Route path="/main/prospect/:id" component={ProspectInfo} />
              <Redirect to="/main/prospects" />
            </>
          ) : (
            <>
              <Route path="/main/prospects" component={ProspectsList} />
              <Route path="/main/prospect/:id" component={ProspectInfo} />
              <Redirect to="/main/prospects" />
            </>
          )}
        </Switch>
      </Content>
    </Section>
  );
};
