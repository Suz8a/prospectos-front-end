import styled from "styled-components";

type SectionContainerProps = {
  alignItems?: "stretch" | "center" | "start" | "end";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

export const SectionContainer = styled.div<SectionContainerProps>`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  background-color: #f0f0f0;
  ${({ alignItems, justifyContent }) => `
  align-items: ${alignItems ? alignItems : ""};
  justify-content: ${justifyContent ? justifyContent : ""};
  `}
`;
