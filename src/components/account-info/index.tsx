import React from "react";
import { InfoContainer } from "./styled";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IconContainer } from "./styled";

type AccountInfoProps = {
  name: string;
};

function AccountInfo({ name }: AccountInfoProps) {
  return (
    <InfoContainer>
      <IconContainer>
        <IoPersonCircleSharp size="70px" />
      </IconContainer>
      <h2>{name}</h2>
    </InfoContainer>
  );
}

export default AccountInfo;
