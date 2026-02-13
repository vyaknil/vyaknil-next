"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Icon } from '@iconify/react';
import {
  color, font, getFont, getRem,
  VFlex, VLink, VButton, Styled, transitionDuration, transitionFunction
} from '@/vyakui-react';
import { backStyle, CustomVLink } from '@/components/header';

export const HeaderLogin = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closedIcon = <Icon icon={"mdi:account"} className={"icon"} />;
  const openedIcon = <Icon icon={"mdi:close"} className={"icon"} />;

  return (
    <Styled vStyle={{position: "relative", display: "inline-block"}}>
      <CustomVLink onClick={() => setMenuOpen(!isMenuOpen)}>
        <Styled as="div" vStyle={{ position: 'relative', display: 'flex' }}>
          {isMenuOpen ? openedIcon : closedIcon}
          {session && (
            <Styled
              as="div"
              vStyle={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: color.success || color.accent1,
                border: `2px solid ${color.gray5}`
              }}
            />
          )}
        </Styled>
      </CustomVLink>

      <VFlex
        direction="column"
        gap={12}
        padding={[12, 16]}
        radius={[8]}
        vStyle={{
          ...backStyle,
          transitionDuration:       transitionDuration,
          transitionTimingFunction: transitionFunction,
          transitionProperty:       "transform, opacity",
          position: "absolute",
          top: "100%",
          right: 0,
          marginTop: getRem(8),
          transform: isMenuOpen ? "translateX(0)" : "translateX(16px)",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "all" : "none",
        }}
      >
        <Styled as="h1" vStyle={{ ...getFont(font.body3), color: color.gray1 }}>
          {session ? "Администратор" : "Доступ"}
        </Styled>

        <VFlex direction="column" gap={8}>
          {session ? (
            <>
              <Styled as="span" vStyle={{ ...getFont(font.body6), color: color.gray1 }}>
                {session.user?.email}
              </Styled>

              <VButton
                variant="outline"
                size="sm"
                colorText={["error", "accent3"]}
                vStyle={{ marginTop: getRem(4) }}
                onClick={() => signOut({ redirectTo: '/' })}
              >
                Выйти
              </VButton>
            </>
          ) : (
            <VLink
              as={Link}
              href="/login"
              variant="background"
              colorText={["gray1", "gray2"]}
              vStyle={{
                padding: '8px 12px',
                textAlign: 'center',
                borderRadius: getRem(4)
              }}
              onClick={() => setMenuOpen(false)}
            >
              Войти
            </VLink>
          )}
        </VFlex>
      </VFlex>
    </Styled>
  );
};