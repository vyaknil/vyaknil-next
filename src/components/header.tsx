"use client"

import { Icon } from '@iconify/react'
import { color, VLink } from '@/vyakui-react';


export const Header = () => {
  return (
    <header>
      <VLink
        variant={"background"}
        size={"sm"}
        colorText={["gray1", "gray4"]}
        vStyle={{
          border: `1px solid ${color.gray4}`
        }}
      >
        <Icon icon={"mdi:menu"} className={"icon"}/>
      </VLink>
    </header>
  );
}