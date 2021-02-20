import styled from "styled-components";

type CardContainerProps = {
  width: string;
  height: string;
  borderRadius?: String;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  position?: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  ${({
    width,
    height,
    borderRadius,
    backgroundColor,
    borderColor,
    padding,
    position,
  }) => `
    min-width: ${width};
    max-width: ${width};
    height: ${height};
    border-radius: ${borderRadius ? borderRadius : ""};
    border: 1px solid ${borderColor ? borderColor : "#C9C9C9"};
    background-color: ${backgroundColor ? backgroundColor : "#FFFFFF"};
    padding: ${padding ? padding : "5px"};
    position: ${position ? position : "relative"};
 `}
  min-height: 100%;
`;
