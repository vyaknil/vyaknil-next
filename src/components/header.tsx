import { HeaderMenu } from '@/components/headerMenu'
import { sizeStyle } from '@/components/index'
import { Logo } from '@/logo'
import { Icon } from '@iconify/react'
import { BaseStyledProps, color, getRem, VFlex, VLink, VStyle } from '@/vyakui-react';
import React from 'react'


export const backStyle: VStyle = {
  border:          `1px solid ${color.gray4}`,
  backdropFilter:  "blur(1px)",
  backgroundColor: "rgba(0, 0, 0, .4)"
}

export const CustomVLink = ({children, onClick}: BaseStyledProps<any>) => {
  return (
    <VLink
      variant={"background"}
      size={"sm"}
      colorText={["gray1", "gray4"]}
      onClick={onClick}
      vStyle={{
        ...backStyle
      }}
    >
      {children}
    </VLink>
  );
}

export const Header = () => {
  return (
    <VFlex
      as={"header"}
      align={"center"}
      justify={"space-between"}
      gap={8}
      vStyle={{
        position: "fixed",
        width:    "100%",
        top:      getRem(8),
        ...sizeStyle
      }}
    >
      <HeaderMenu/>
      <VLink
        size={"sm"}
        href={"/"}
        vStyle={{
          ...backStyle,
          borderRadius:   getRem(6),
          width:          "100%",
          height:         getRem(36),
          justifyContent: "center"
        }}
      >
        <Logo/>vyaknil
      </VLink>
      <CustomVLink><Icon icon={"mdi:account"} className={"icon"}/></CustomVLink>
    </VFlex>
  );
}