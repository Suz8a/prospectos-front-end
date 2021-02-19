import styled from "styled-components";

type FullLineProps = {
  width?: string;
  height?: string;
  color?: string;
};

export const FullLine = styled.div<FullLineProps>`
  ${({ width, height, color }) => `
    width: ${width ? width : "100%"};
    height: ${height ? height : "1px"};
    background-color: ${color ? color : "#C9C9C9"};
`}
`;
