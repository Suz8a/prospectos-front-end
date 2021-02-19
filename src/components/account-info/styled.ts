import styled from "styled-components";

type InfoContainerProps = {
  margin?: string;
};

export const InfoContainer = styled.div<InfoContainerProps>`
  height: 70px;
  width: 100%;
  display: flex;
  margin-right: 16px;
  justify-content: space-between;
  ${({ margin }) => `margin:${margin ? margin : "0"}`}
`;

export const IconContainer = styled.div`
  margin-left: -6px;
`;
