import React, { ReactNode } from "react";
import { SectionContainer } from "./styled";

type SectionProps = {
  children: ReactNode;
  alignItems?: "stretch" | "center" | "start" | "end";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

function Section({ children, alignItems, justifyContent }: SectionProps) {
  return (
    <SectionContainer alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </SectionContainer>
  );
}

export default Section;
