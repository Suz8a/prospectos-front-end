import React, { ReactNode } from "react";
import { SectionContainer } from "./styled";

type FormSectionContainerProps = {
  padding?: string;
  width?: string;
  height?: String;
  backgroundColor?: String;
  children: ReactNode;
};

function FormSectionContainer({
  padding,
  width,
  height,
  backgroundColor,
  children,
}: FormSectionContainerProps) {
  return (
    <SectionContainer
      padding={padding}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    >
      {children}
    </SectionContainer>
  );
}

export default FormSectionContainer;
