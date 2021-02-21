import styled from "styled-components";

type SectionContainerProps = {
  padding?: string;
  width?: string;
  height?: String;
  backgroundColor?: String;
};

export const SectionContainer = styled.div<SectionContainerProps>`
  ${({ padding, width, height, backgroundColor }) => `
    padding: ${padding ? padding : ""};
    width: ${width ? width : "100%"};
    height: ${height ? height : "auto"};
    background-color: ${backgroundColor ? backgroundColor : "white"};
  `}
`;
