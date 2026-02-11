"use client";

import { backStyle, CustomVLink } from '@/components/header'
import { pages } from '@/staticData'
import { color, font, getFont, getRem, transitionDuration, transitionFunction, VFlex, VLink } from '@/vyakui-react'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'


export const HeaderMenu = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const closedIcon = <Icon icon={"mdi:menu"} className={"icon"}/>;
  const openedIcon = <Icon icon={"mdi:close"} className={"icon"}/>;

  return (<>
    <CustomVLink
      onClick={() => setMenuOpen(!isMenuOpen)}
    >{isMenuOpen? openedIcon : closedIcon}</CustomVLink>
    <VFlex
      direction={"column"}
      gap={12}
      padding={[8, 12]}
      radius={[6]}
      vStyle={{
        ...backStyle,
        transitionDuration:       transitionDuration,
        transitionTimingFunction: transitionFunction,
        transitionProperty:       "transform, opacity",
        position:                 "absolute",
        top:                      "100%",
        marginTop:                getRem(8),
        transform:                isMenuOpen? "translateX(0)" : "translateX(-16px)",
        pointerEvents:            isMenuOpen? "all" : "none",
        opacity:                  isMenuOpen? "1" : "0"
      }}
    >
      <h1
        style={{
          ...getFont(font.body3),
          color: color.gray1
        }}
      >Pages</h1>
      <VFlex
        as={"ul"}
        direction={"column"}
        gap={6}
      >
        {pages.map(p => {
          return (
            <li key={p.name}><VLink size={"xs"} href={p.link}>{p.name}</VLink></li>
          )
        })}
      </VFlex>
    </VFlex>
  </>);
}