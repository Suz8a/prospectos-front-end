import styled, { keyframes } from "styled-components";
import { Typography } from "@material-ui/core";
import Cancel from "@material-ui/icons/Cancel";

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

export const Cloud = styled.img`
  display: block;
  margin: 20px auto 0px auto;
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
`;

export const Description = styled.div`
  width: fit-content;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #9c9c9cde;
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
  height: 200px;
  width: 100%;
  background: white;
  border-radius: 4px;
  border: 1px dashed #00000058;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-size: 11px;
  margin: 4px 5px 0px 5px;
  padding: 5px;
  border: 1px solid #00000058;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const UploadButton = styled.div`
  width: 230px;
  height: 40px;
  margin-top: 30px;
  background: black;
  color: white;
  border-radius: 50px;
  transition: 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const CancelIconContainer = styled.div`
  float: right;
  margin: auto 0 auto auto;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
