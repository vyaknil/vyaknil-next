import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import { Providers } from "./providers";
import { SvgSprite } from "@/components/svgSprite";
import { Footer, Header } from "@/components/elements";
import { Flex } from "@/components/ui";
import { mapRem, rem } from "@/types";

// fonts
const Heading = localFont({
  src: [
    {
      path: "../assets/fonts/heading/zed-sans-heavy.ttf",
      weight: "900",
    },
    {
      path: "../assets/fonts/heading/zed-sans-extrabold.ttf",
      weight: "800",
    },
    {
      path: "../assets/fonts/heading/zed-sans-bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/heading/zed-sans-semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-heading",
});

const Body = localFont({
  src: [
    {
      path: "../assets/fonts/body/zed-sans-extendedmedium.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/body/zed-sans-extended.ttf",
      weight: "400",
    },
  ],
  variable: "--font-body",
});

const Mono = localFont({
  src: [
    {
      path: "../assets/fonts/mono/zed-mono-extendedsemibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-mono",
});

// metadata
export const metadata: Metadata = {
  title: "vyaknil",
  description: "Next.js",
};

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Heading.variable} ${Body.variable} ${Mono.variable}`}>
        <SvgSprite />
        <Providers>
          <Header />
          <Flex direction="column" gap={96} 
            vyakStyle={{
              marginTop: `calc(56px + calc(${rem} * 36))`,
              marginBottom: `calc(${rem} * 36)`
            }}
            sizeStyle={{
              xl: { padding: mapRem([0, 256]) },
              lg: { padding: mapRem([0, 128]) },
              md: { padding: mapRem([0, 64]) },
              sm: { padding: mapRem([0, 32]) },
              xs: { padding: mapRem([0, 16]) }
            }}
          >
            {children}
          </Flex>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
