"use client"
import { Icons } from '@/staticData'
import { color, transitionDuration, transitionFunction, VFlex } from '@/vyakui-react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'


interface CardSkillProps {
  children: React.ReactNode;
  name: string;
  icon: Icons;
  link: string;
}

export const CardSkill = ({
  children, name, icon, link
}: CardSkillProps) => {
  return (
    <VFlex
      as={Link}
      href={link}
      target={"_blank"}
      text={"body5"}
      direction={"column"}
      gap={12}
      padding={[16]}
      radius={[8]}
      vStyle={{
        transitionDuration:       transitionDuration,
        transitionTimingFunction: transitionFunction,
        transitionProperty:       "outline-color, box-shadow",
        outline:                   `1px solid ${color.gray4}`,
        outlineOffset: "-1px",
        backgroundColor:          color.gray5,
        "& .skillName":         {
          transitionDuration:       transitionDuration,
          transitionTimingFunction: transitionFunction,
          transitionProperty:       "color"
        },
        "&:hover":                {
          outlineColor:      color.accent3,
          boxShadow:        `inset 0 0 16px ${color.accent3}`,
        },
        "&:hover .skillName": {
          color: color.accent3
        }
      }}
    >
      <VFlex
        text={"heading6"}
        gap={8}
        className={"skillName"}
      >
        <Icon icon={icon} className={"icon"}/> {name}
      </VFlex>
      {children}
    </VFlex>
  );
}
