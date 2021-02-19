import React from "react";
import { FullLine } from "./styled";

type LineProps = {
  width?: string;
  height?: string;
  color?: String;
};

function Line({ width, height, color }: LineProps) {
  return <FullLine width={width} height={height} color={color} />;
}

export default Line;
