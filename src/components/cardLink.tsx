"use client"

import { color, transitionDuration, transitionFunction, VFlex } from '@/vyakui-react'
import Link from 'next/link'
import React from 'react'


interface CardLinkProps {
  children: React.ReactNode;
  link: string;
}

export const CardLink = ({
  children, link
}: CardLinkProps) => {
  return (
    <VFlex
      as={Link}
      href={link}
      padding={[20, 16]}
      radius={[16]}
      gap={12}
      text={"heading5"}
      justify={"center"}
      vStyle={{
        width: "100%",
        backgroundColor: color.gray5,
        outline: `1px solid ${color.gray4}`,
        outlineOffset: "-1px",
        color: color.gray1,
        transitionDuration: transitionDuration,
        transitionTimingFunction: transitionFunction,
        transitionProperty: "outline-color, background-color",
        "&:hover": {
          backgroundColor: color.accent3,
          outlineColor: color.gray1
        }
      }}
    >
      {children}
    </VFlex>
  );
}
