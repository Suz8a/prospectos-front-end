import React from "react";
import { SectionTitle } from "./styled";

type TitleProps = {
  text: string;
};

function Title({ text }: TitleProps) {
  return <SectionTitle>{text}</SectionTitle>;
}

export default Title;
