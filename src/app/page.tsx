import { font, color, getFont, VFlex } from '@/vyakui-react'


const sectionHello =
  <VFlex
    as={"section"}
    direction={"column"}
    gap={8}
  >
    <span style={getFont(font.heading1)}>Hello!</span>
    <div style={getFont(font.body5)}>
      <p>I'm Vyaknil <span style={{...getFont(font.body6), color: color.gray2}}>(Daniel Vyakulin)</span></p>
      <p>Web-designer/developer. Also I stream games on Twitch and YouTube.</p>
    </div>
  </VFlex>;

export default function Page() {
  return (<>
    {sectionHello}
  </>);
}