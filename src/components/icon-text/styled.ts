import styled from "styled-components";

type TextContainerProps = {
  color?: string;
};

export const IconTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const TextContainer = styled.div<TextContainerProps>`
  width: fit-content;
  height: auto;
  margin-left: 10px;
  ${({ color }) => `
    color: ${color ? color : "#000000"};
`};
`;
