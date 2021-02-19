import React, { ReactNode } from "react";
import { ContentContainer } from "./styled";

type ContentProps = {
  children: ReactNode;
};

function Content({ children }: ContentProps) {
  return <ContentContainer>{children}</ContentContainer>;
}

export default Content;
