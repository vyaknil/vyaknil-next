import { Flex, Icon, LinkA } from "@/components/ui";
import { links, pages } from "@/data/static";
import { color, mapRem } from "@/types";

export const Footer = () => {
  return (
    <Flex 
      as="footer" 
      vyakStyle={{ width: "100%", borderTop: `1px solid ${color.gray4}`}}
      className="bg-gray5"
      align="center"
      justify="space-between"
      sizeStyle={{
        xl: {
          padding: mapRem([47, 256, 48])
        },
        lg: {
          padding: mapRem([47, 128, 48])
        },
        md: {
          padding: mapRem([47, 64, 48])
        },
        sm: {
          padding: mapRem([47, 32, 48])
        },
        xs: {
          padding: mapRem([47, 16, 48])
        }
      }}
    >
      <Flex as="ul" gap={12} direction="column">
        {pages.map((page) => {return(
          <LinkA key={page.name} as="li" href={page.href} className="body4">{page.name}</LinkA>
        )})}
      </Flex>
      <LinkA href="/"><Icon name="vyaknil-logo" className="heading1"/></LinkA>
      <Flex as="ul" gap={12} direction="column">
        {links.map((link) => {return(
          <LinkA key={link.name} as="li" href={link.href}>
            <Flex gap={8} className="body4">
              <Icon name={link.icon}/>{link.name}
            </Flex>
          </LinkA>
        )})}
      </Flex>
    </Flex>
  );
}