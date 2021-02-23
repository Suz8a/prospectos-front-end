import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import AccountInfo from "../../components/account-info";
import { sideBarOptions } from "../../constants";
import Card from "../../elements/card";
import { ExitContainer, ListContainer, SideBarContainer } from "./styled";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { setToken, setUser } from "../../store/actions";

type SideBarProps = {
  onOptionClick: (url: string) => void;
};

function SideBar({ onOptionClick }: SideBarProps) {
  const history = useHistory();
  const dispatch = useDispatch();

  function onOptionSalir() {
    history.push("/");
    dispatch(setUser(""));
    dispatch(setToken(""));
    localStorage.removeItem("username");
    localStorage.removeItem("access_token");
  }

  return (
    <Card width="280px" height="" padding="0px" position="fixed">
      <SideBarContainer>
        <AccountInfo name="Adriana Ochoa" />
        <ListContainer>
          <List component="nav">
            {sideBarOptions.map(({ option, icon, url }, index) => (
              <ListItem key={index} button onClick={() => onOptionClick(url)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={option} />
              </ListItem>
            ))}
          </List>
        </ListContainer>
        <ExitContainer>
          <ListContainer>
            <List component="nav">
              <ListItem button onClick={() => onOptionSalir()}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Salir" />
              </ListItem>
            </List>
          </ListContainer>
        </ExitContainer>
      </SideBarContainer>
    </Card>
  );
}

export default SideBar;
