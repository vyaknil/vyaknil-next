import { Flex, Icon } from "@/components/ui"

export const SectionHello = () => {
  return (
    <Flex as="section" justify="space-between"
    vyakStyle={{
      container: "size sectionHello"
    }}>
      <Flex direction="column" gap={32}>
        <h1 className="heading1">Hello</h1>
        <p className="body1">I’m Daniel, UI-designer and web-developer.</p>
      </Flex>
      <Icon name="vyaknil-logo" height="168px"/>
    </Flex>
  );
}