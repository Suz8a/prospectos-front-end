import React, { ReactNode } from "react";
import { IconTextContainer, TextContainer } from "./styled";

type IconTextProps = {
  icon: ReactNode;
  text: string;
  color?: string;
};

function IconText({ icon, text, color }: IconTextProps) {
  return (
    <IconTextContainer>
      {icon}
      <TextContainer color={color}>{text}</TextContainer>
    </IconTextContainer>
  );
}

export default IconText;
