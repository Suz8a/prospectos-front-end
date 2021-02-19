import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import AccountInfo from "../../components/account-info";
import { sideBarOptions } from "../../constants";
import Card from "../../elements/card";
import { ListContainer, SideBarContainer } from "./styled";

type SideBarProps = {
  onOptionClick: (url: string) => void;
};

function SideBar({ onOptionClick }: SideBarProps) {
  return (
    <Card width="280px" height="100vh">
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
      </SideBarContainer>
    </Card>
  );
}

export default SideBar;
