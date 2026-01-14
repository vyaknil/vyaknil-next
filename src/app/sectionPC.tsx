import { CardPC } from "@/components/elements";
import { Flex } from "@/components/ui";
import { pcComponents } from "@/data/static";

export const SectionPC = () => {
  return (
    <Flex as="section" direction="column" gap={32}>
      <h1 className="heading2">PC components</h1>
      <Flex gap={32} wrap="wrap">
        {pcComponents.map((pc) => {return(
          <CardPC key={pc.name} name={pc.name} icon={pc.icon}>
            {pc.description}
          </CardPC>
        )})}
      </Flex>
    </Flex>
  );
}