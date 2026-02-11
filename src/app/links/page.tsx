import { CardLink } from '@/components'
import { links } from '@/staticData'
import { font, getFont, VFlex } from '@/vyakui-react'
import { Icon } from '@iconify/react'


const sectionLinks =
  <VFlex
    as={"section"}
    direction={"column"}
    gap={32}
  >
    <h1 style={{...getFont(font.heading1)}}>Links</h1>
    <VFlex vStyle={{width: "100%"}} direction={"column"} gap={28} as={"ul"}>{links.map(l => {
      return (
        <li style={{width: "100%"}} key={l.name}><CardLink link={l.link}><Icon icon={l.icon} className={"icon"}/>{l.name}</CardLink></li>
      )
    })}</VFlex>
  </VFlex>

export default function Page() {
  return (<>
    {sectionLinks}
  </>);
}