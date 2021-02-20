import React, { ReactNode } from "react";
import { CardContainer } from "./styled";

type CardProps = {
  width: string;
  height: string;
  borderRadius?: String;
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  position?: "static" | "relative" | "fixed" | "absolute" | "sticky";
};

function Card({
  width,
  height,
  borderRadius,
  children,
  backgroundColor,
  borderColor,
  padding,
  position,
}: CardProps) {
  return (
    <CardContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      padding={padding}
      position={position}
    >
      {children}
    </CardContainer>
  );
}

export default Card;
