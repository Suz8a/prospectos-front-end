import React from "react";
import AccountInfo from "../../components/account-info";
import Card from "../../elements/card";
import { SideBarContainer } from "./styled";

function SideBar() {
  return (
    <Card width="350px" height="100vh">
      <SideBarContainer>
        <AccountInfo name="Adriana Ochoa" />
      </SideBarContainer>
    </Card>
  );
}

export default SideBar;
