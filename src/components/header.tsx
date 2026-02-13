import { HeaderLogin } from '@/components/headerLogin'
import { HeaderMenu } from '@/components/headerMenu'
import { sizeStyle } from '@/components/index'
import { Logo } from '@/logo'
import { BaseStyledProps, color, getRem, VFlex, VLink, VStyle } from '@/vyakui-react';
import React from 'react'


export const backStyle: VStyle = {
  outline:         `1px solid ${color.gray4}`,
  outlineOffset:   "-1px",
  backdropFilter:  "blur(3px)",
  backgroundColor: "rgba(0, 0, 0, .8)"
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
        variant={"background"}
        href={"/"}
        colorText={["gray1", "gray4"]}
        vStyle={{
          ...backStyle,
          width: "100%",
          justifyContent: "center"
        }}
      >
        <Logo/>vyaknil
      </VLink>
      <HeaderLogin/>
    </VFlex>
  );
}