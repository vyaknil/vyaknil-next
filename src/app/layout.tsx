import { Footer, Header, sizeStyle } from '@/components'
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react"
import React from 'react'
import { color, getRem, VFlex, VRegistry } from '@/vyakui-react';
import { fontBody, fontHeading } from '@/fonts';
import "@/vyakui-react/global.css";


export const metadata: Metadata = {
  title: "vyaknil"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${fontHeading.variable} ${fontBody.variable}`} style={{backgroundColor: color.gray5, color: color.gray1}}>
    <SessionProvider><VRegistry>
      <Header/>
      <VFlex
        gap={64}
        as={"main"}
        direction={"column"}
        vStyle={{
          ...sizeStyle,
          marginTop: getRem(80)
        }}
      >
        {children}
        <Footer/>
      </VFlex>
    </VRegistry></SessionProvider>
    </body>
    </html>
  );
}
