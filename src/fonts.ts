import { Ubuntu_Sans_Mono, Unbounded } from 'next/font/google';

export const fontHeading = Unbounded({
  subsets: ["latin-ext", "cyrillic-ext"],
  weight: ["900", "800", "700"],
  style: "normal",
  display: "swap",
  preload: true,
  variable: "--font-heading"
});

export const fontBody = Ubuntu_Sans_Mono({
  subsets: ["latin-ext", "cyrillic-ext"],
  weight: ["700", "600", "500"],
  display: "swap",
  preload: true,
  variable: "--font-body"
});