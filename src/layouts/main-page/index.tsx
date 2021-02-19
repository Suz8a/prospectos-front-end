import React from "react";
import SideBar from "../../modules/side-bar";
import Section from "../../containers/section";
import Content from "../../containers/content";

function MainPage() {
  return (
    <Section>
      <SideBar onOptionClick={(url) => console.log(url)} />
      <Content />
    </Section>
  );
}

export default MainPage;
