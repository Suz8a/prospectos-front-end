import React, { ReactNode } from "react";
import { CardContainer } from "./styled";

type CardProps = {
  width: string;
  height: string;
  borderRadius?: String;
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
};

function Card({
  width,
  height,
  borderRadius,
  children,
  backgroundColor,
  borderColor,
}: CardProps) {
  return (
    <CardContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      {children}
    </CardContainer>
  );
}

export default Card;
