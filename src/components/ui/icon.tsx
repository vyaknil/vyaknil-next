import { Icons } from "@/types";
import { Style, StyleProps } from "@/components/style";

export interface IconProps extends StyleProps {
  name: Icons,
  width?: string,
  height?: string,
  aspectRatio?: string,
}

export const Icon = ({
  name,
  width = "auto",
  height = "1em",
  aspectRatio = "1/1",
  vyakStyle,
  ...rest
}: IconProps) => {
  return (
  <Style vyakStyle={{
    width: width,
    height: height,
    aspectRatio: aspectRatio,
    ...vyakStyle
  }} {...rest}>
    <svg style={{
        width: width,
        height: height,
        aspectRatio: aspectRatio
      }}>
      <use href={`#${name}`} style={{
        width: width,
        height: height,
        aspectRatio: aspectRatio
      }}/>
    </svg>
  </Style>
  );
}