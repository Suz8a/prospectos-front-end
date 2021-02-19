import React from "react";
import SideBar from "../../modules/side-bar";
import Section from "../../containers/section";
import Content from "../../containers/content";

function MainPage() {
  return (
    <Section>
      <SideBar />
      <Content />
    </Section>
  );
}

export default MainPage;
