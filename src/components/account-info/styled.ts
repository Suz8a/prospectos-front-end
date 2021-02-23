import styled from "styled-components";

type InfoContainerProps = {
  margin?: string;
};

export const InfoContainer = styled.div<InfoContainerProps>`
  height: 70px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  ${({ margin }) => `margin:${margin ? margin : "0"}`}
`;

export const IconContainer = styled.div`
  margin-left: -6px;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 10px;
  text-transform: capitalize;
`;
