import { Flex, Icon, LinkA } from "@/components/ui";
import { pages } from "@/data/static";
import { color, mapRem } from "@/types";

export const Header = () => {
  return (
    <Flex 
      as="header" 
      vyakStyle={{
        position: "fixed", 
        width: "100%", 
        borderBottom: `1px solid ${color.gray4}`,
        zIndex: 9999,
        top: 0
      }}
      className="bg-gray5"
      align="center"
      justify="space-between"
      sizeStyle={{
        xl: {
          padding: mapRem([12, 256, 11])
        },
        lg: {
          padding: mapRem([12, 128, 11])
        },
        md: {
          padding: mapRem([12, 64, 11])
        },
        sm: {
          padding: mapRem([12, 32, 11])
        },
        xs: {
          padding: mapRem([12, 16, 11])
        }
      }}
    >
      <LinkA href="/"><Icon name="vyaknil-logo" className="body3"/></LinkA>
      <Flex as="ul" gap={20}>
        {pages.map((page) => {return(
          <LinkA key={page.name} as="li" href={page.href} className="body4">{page.name}</LinkA>
        )})}
      </Flex>
    </Flex>
  );
}