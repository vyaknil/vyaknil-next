import { CardSkill } from "@/components/elements";
import { Flex, Masonry } from "@/components/ui";
import { skills } from "@/data/static";

export const SectionSkills = () => {
  return (
    <Flex as="section" direction="column" gap={32}>
      <h1 className="heading1">Skills</h1>
      <Masonry columns={3} columnsXs={1} columnsSm={2} columnsMd={2} gap={32}>
        {skills.map((skill) => {return(
          <CardSkill className="masonryItem" key={skill.name} name={skill.name} icon={skill.icon}>
            {skill.description}
          </CardSkill>
        )})}
      </Masonry>
    </Flex>
  );
}