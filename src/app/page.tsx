import { SectionHello } from "./sectionHello";
import { SectionPC } from "./sectionPC";
import { SectionSkills } from "./sectionSkills";

export default function Home() {
  return (
    <>
      <SectionHello />
      <SectionSkills />
      <SectionPC />
    </>
  );
}
