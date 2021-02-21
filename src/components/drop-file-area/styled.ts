import styled, { keyframes } from "styled-components";
import Cancel from "@material-ui/icons/Cancel";

type visibilityProps = {
  show?: boolean;
};

const showAnimation = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

const showContainer = keyframes`
    from{
        transform:scaleY(0);
        opacity:0;
    }
    to{
        transform:scaleY(1);
        opacity:1;
    }
`;

export const CancelIcon = styled(Cancel)`
  width: 14px;
  height: 14px;
`;

export const ButtonDescription = styled.div`
  font-size: 15px;
  height: auto;
  width: fit-content;
  font-weight: bold;
  color: black;
`;

export const Description = styled.div`
  width: fit-content;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  color: rgba(123, 123, 123, 0.87);
`;

export const DescriptionContainer = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DropArea = styled.div`
  animation: ${showContainer} 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  height: auto;
  width: 100%;
  border-radius: 4px;
  padding: 10px;
  border: 1px dashed #00000058;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  & > * {
    opacity: 0;
    animation: ${showAnimation} 0.4s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }
`;

export const Item = styled.div`
  animation: ${showAnimation} 0.2s;
  width: auto;
  height: 40px;
  font-size: 15px;
  padding: 5px;
  border: 1px solid #00000058;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const UploadButton = styled.div<visibilityProps>`
  width: fit-content;
  height: auto;
  margin-top: 10px;
  border-radius: 5px;
  transition: 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
  ${({ show }) => `
    ${!show ? "display:none" : ""}
  `}
`;

export const CancelIconContainer = styled.div`
  float: right;
  margin: auto 0 auto auto;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
