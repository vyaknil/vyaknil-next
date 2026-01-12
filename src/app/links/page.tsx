import { CardLink } from "@/components/elements";
import { Flex } from "@/components/ui";
import { links } from "@/data/static";

export default function Page() {
  return (
    <>
    <Flex as="section" direction="column" gap={32} align="center">
      <h1 className="heading1">Links</h1>
      <Flex wrap="wrap" gap={32} justify="center">
        {links.map((link) => {return(
          <CardLink key={link.name} icon={link.icon} href={link.href}>{link.name}</CardLink>
        )})}
      </Flex>
    </Flex>
    </>
  );
}
