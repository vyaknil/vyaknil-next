import { ResponsiveStyle, Style, StyleProps } from "@/components/style";
import { getRem, size } from "@/types";
import { CSSObject } from "@emotion/react";

export interface MasonryProps extends StyleProps {
  columns?: number,
  gap?: number,
  columnsXl?: number,
  columnsLg?: number,
  columnsMd?: number,
  columnsSm?: number,
  columnsXs?: number
}

export const Masonry = ({
  children,
  columns = 1,
  columnsXl,
  columnsLg,
  columnsMd,
  columnsSm,
  columnsXs,
  gap = 0,
  vyakStyle,
  sizeStyle = {},
  ...rest
}: MasonryProps) => {

  const masonryStyle: CSSObject = {
    columnCount: columns,
    columnGap: getRem(gap),
    width: "100%",
    ".masonryItem": {
      breakInside: "avoid",
      marginBottom: getRem(gap),
      width: "100%"
    },
    ...vyakStyle
  }

  const masonrySizeStyle: ResponsiveStyle = {
    xl: {columnCount: columnsXl || columns, ...sizeStyle.xl},
    lg: {columnCount: columnsLg || columns, ...sizeStyle.lg},
    md: {columnCount: columnsMd || columns, ...sizeStyle.md},
    sm: {columnCount: columnsSm || columns, ...sizeStyle.sm},
    xs: {columnCount: columnsXs || columns, ...sizeStyle.xs}
  }

  return (
    <Style vyakStyle={masonryStyle} sizeStyle={masonrySizeStyle} {...rest}>
      {children}
    </Style>
  );
}