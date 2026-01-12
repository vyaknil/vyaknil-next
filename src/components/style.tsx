"use client";

import { size, type Size } from "@/types";
import styled, { CSSObject } from "@emotion/styled";
import { forwardRef } from "react";


export type ResponsiveStyle = Partial<Record<Size, CSSObject>>;

export interface StyleProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode,
  as?: React.ElementType
  vyakStyle?: CSSObject,
  sizeStyle?: ResponsiveStyle
}

interface StyleSourceProps {
  vyakStyle: CSSObject,
  sizeStyle: ResponsiveStyle
}

const StyleSource = styled.div<StyleSourceProps>(({ vyakStyle, sizeStyle }) => ({
  ...vyakStyle,
  ...Object.fromEntries(
    Object.entries(size)
      .sort(([ ,a], [ ,b]) => a - b) 
      .map(([key, value]) => {
        const styles = sizeStyle[key as Size];
        if (!styles) return null;

        return [
          `@media (min-width: ${value}px)`,
          styles,
        ];
      })
      .filter(Boolean) as [string, CSSObject][]
  ),
}));


export const Style = forwardRef<HTMLElement, StyleProps>(
  ({ children, as = "div", vyakStyle = {}, sizeStyle = {}, ...props }, ref) => {
    return (
      <StyleSource
        ref={ref as React.Ref<HTMLDivElement>}
        as={as}
        vyakStyle={vyakStyle}
        sizeStyle={sizeStyle}
        {...props}
      >
        {children}
      </StyleSource>
    );
  }
);

Style.displayName = "Style";
