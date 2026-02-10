import { CardSkill } from '@/components/cardSkill'
import { skills } from '@/staticData'
import { font, color, getFont, VFlex, VMasonry } from '@/vyakui-react'


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

const sectionSkills =
  <VFlex
    as={"section"}
    direction={"column"}
    gap={32}
  >
    <span style={getFont(font.heading1)}>Skills</span>
    <VMasonry
      vStyle={{
        width: "100%"
      }}
      gap={20}
      columns={{
        default: 1,
        sm: 2,
        lg: 3
      }}
    >
      {skills.map(s => {return(
        <CardSkill key={s.name} link={s.link} name={s.name} icon={s.icon}>{s.description}</CardSkill>
      )})}
    </VMasonry>
  </VFlex>;

export default function Page() {
  return (<>
    {sectionHello}
    {sectionSkills}
  </>);
}