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
  className?: string;
  margin?: string;
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
  className,
  margin,
}: CardProps) {
  return (
    <CardContainer
      className={className}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      padding={padding}
      position={position}
      margin={margin}
    >
      {children}
    </CardContainer>
  );
}

export default Card;
