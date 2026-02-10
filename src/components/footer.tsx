import { Logo } from '@/logo'
import { links, pages } from '@/staticData'
import { color, getRem, size, VFlex, VLink, VStyle } from '@/vyakui-react'
import { Icon } from '@iconify/react'

const sizeStyle: VStyle = {
  [`@media screen and (min-width: ${size.xs}px)`]: {
    justifyContent: "space-between"
  }
}

export const Footer = () => {
  return (
    <VFlex
      as={"footer"}
      radius={[6]}
      padding={[32]}
      gap={32}
      align={"center"}
      wrap={"wrap"}
      justify={"center"}
      vStyle={{
        backgroundColor: color.gray5,
        border: `1px solid ${color.gray4}`,
        width: "100%",
        ...sizeStyle
      }}
    >
      <VFlex as={"ul"} direction={"column"} gap={6}>
        {pages.map(p => {return(
          <li key={p.name}><VLink href={p.link}>{p.name}</VLink></li>
        )})}
      </VFlex>
      <VFlex align={"center"} as={"ul"} direction={"column"} vStyle={{fontSize: getRem(96)}}>
        <Logo/><VLink href={"mailto:vyaknil@gmail.com"} size={"xs"}>vyaknil@gmail.com</VLink>
      </VFlex>
      <VFlex as={"ul"} direction={"column"} gap={6}>
        {links.toSorted().map(l => {return(
          <li key={l.name}><VLink href={l.link}><Icon icon={l.icon} className={"icon"}/>{l.name}</VLink></li>
        )})}
      </VFlex>
    </VFlex>
  );
}