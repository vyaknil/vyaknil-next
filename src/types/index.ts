// Color
// -- Type
// ---- Gray
type ColorGray = "gray1"|"gray2"|"gray3"|"gray4"|"gray5";

// ---- Accent
type ColorAccent = "accent1"|"accent2"|"accent3"|"accent4"|"accent5";

// ---- Status
type ColorStatus = "info"|"error"|"warning"|"success";

export type Color = ColorGray | ColorAccent | ColorStatus;

// -- Object
export const color: Record<Color, string> = {
  gray1: "#f5f5f5",
  gray2: "#b8b8b8",
  gray3: "#7a7a7a",
  gray4: "#3d3d3d",
  gray5: "#000000",
  accent1: "#caabe0",
  accent2: "#ba59ff",
  accent3: "#9500ff",
  accent4: "#6100a6",
  accent5: "#24003d",
  error: "#ff3d3d",
  info: "#3d7eff",
  warning: "#ffbe3d",
  success: "#3dff7e"
}


// Size
// -- Type
export type Size = "xl"|"lg"|"md"|"sm"|"xs";
// Object
export const size: Record<Size, number> = {
  xl: 1920,
  lg: 1440,
  md: 1024,
  sm: 768,
  xs: 576
}

// Number
export const rem: string = "0.0625rem";
export const getRem = (value: number) => `calc(${rem} * ${value})`;
export const mapRem = (values: number[]) => values.map(getRem).join(" ");

// Icons
export type { Icons } from "./icons.types"