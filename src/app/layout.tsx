import type { Metadata } from "next";
import "@/styles/globals.scss";
import { Providers } from "./providers";
import { SvgSprite } from "@/components/svgSprite";
import { Footer, Header } from "@/components/elements";
import { Flex } from "@/components/ui";
import { mapRem, rem } from "@/types";
import { Montserrat_Alternates, Ubuntu_Sans_Mono } from "next/font/google"

// fonts
const Heading = Montserrat_Alternates({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
});

const Body = Ubuntu_Sans_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
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
      <body className={`${Heading.variable} ${Body.variable}`}>
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
