import React, { ReactNode } from "react";
import { SectionContainer } from "./styled";

type SectionProps = {
  children: ReactNode;
};

function Section({ children }: SectionProps) {
  return <SectionContainer>{children}</SectionContainer>;
}

export default Section;
