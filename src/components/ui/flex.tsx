import { getRem, mapRem } from "@/types";
import { Style, StyleProps } from "@/components/style";
import { CSSObject } from "@emotion/react";

// Flex types
type Direction = "row"|"row-reverse"|"column"|"column-reverse";
type Wrap = "wrap"|"nowrap"|"wrap-reverse";
type Align = "flex-start"|"flex-end"|"center"|"stretch";
type Justify = Align | "space-between"|"space-around"|"space-evenly";
type Numbers = [number] | [number, number] | [number, number, number] | [number, number, number, number];

// Flex interface
export interface FlexProps extends StyleProps {
  direction?: Direction,
  wrap?: Wrap,
  align?: Align,
  justify?: Justify,
  gap?: number,
  padding?: Numbers,
  radius?: Numbers,
  inline?: boolean,
  width?: string
}

export const Flex = ({
  children,
  as = "div",
  direction = "row",
  wrap = "nowrap",
  align = "flex-start",
  justify = "flex-start",
  gap = 0,
  padding = [0],
  radius = [0],
  inline = false,
  width,
  vyakStyle,
  sizeStyle,
  ...rest
}: FlexProps) => {

  const flexStyle: CSSObject = {
    display: `${inline? "inline-flex" : "flex"}`,
    flexDirection: direction,
    flexWrap: wrap,
    alignItems: align,
    justifyContent: justify,
    gap: getRem(gap),
    padding: mapRem(padding),
    borderRadius: mapRem(radius),
    width: width,
    ...vyakStyle
  }

  return (
    <Style 
      as={as}
      vyakStyle={flexStyle}
      sizeStyle={sizeStyle}
      {...rest}
    >
      {children}
    </Style>
  );
}