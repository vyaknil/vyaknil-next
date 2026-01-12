import { Icons } from "@/types";
import { StyleProps } from "@/components/style";
import { Flex, Icon } from "@/components/ui";

export interface CardSkillProps extends StyleProps {
  name: string,
  icon: Icons
}

export const CardSkill = ({
  children,
  name,
  icon,
  vyakStyle,
  className,
  ...rest
}: CardSkillProps) => {
  return (
    <Flex 
      direction="column" 
      padding={[20]} 
      radius={[6]} 
      gap={16}
      className={`${className} bg-gray4 mono1`}
      {...rest}
    >
      <Flex gap={12} className="heading3">
        <Icon name={icon}/>{name}
      </Flex>
      {children}
    </Flex>
  );
}