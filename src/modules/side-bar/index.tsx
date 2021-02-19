import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import AccountInfo from "../../components/account-info";
import { sideBarOptions } from "../../constants";
import Card from "../../elements/card";
import { ListContainer, SideBarContainer } from "./styled";

function SideBar() {
  return (
    <Card width="350px" height="100vh">
      <SideBarContainer>
        <AccountInfo name="Adriana Ochoa" />
        <ListContainer>
          <List component="nav">
            {sideBarOptions.map(({ option, icon }) => (
              <ListItem button>
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
