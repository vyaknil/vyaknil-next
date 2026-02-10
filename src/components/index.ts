import { mapRem, size, VStyle } from '@/vyakui-react'


export const sizeStyle: VStyle = {
  [`@media screen and (min-width: ${size.default}px)`]: {
    padding: mapRem([0, 8])
  },
  [`@media screen and (min-width: ${size.xs}px)`]:      {
    padding: mapRem([0, 16])
  },
  [`@media screen and (min-width: ${size.sm}px)`]:      {
    padding: mapRem([0, 32])
  },
  [`@media screen and (min-width: ${size.md}px)`]:      {
    padding: mapRem([0, 64])
  },
  [`@media screen and (min-width: ${size.lg}px)`]:      {
    padding: mapRem([0, 128])
  },
  [`@media screen and (min-width: ${size.xl}px)`]:      {
    padding: mapRem([0, 256])
  }
}

export * from "./header";
export * from "./footer";
