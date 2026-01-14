import { Icons } from "@/types";
import { StyleProps } from "@/components/style";
import { Flex, Icon } from "@/components/ui";

export interface CardPCProps extends StyleProps {
  name: string,
  icon: Icons
}

export const CardPC = ({
  children,
  name,
  icon,
  vyakStyle,
  className,
  ...rest
}: CardPCProps) => {
  return (
    <Flex 
      direction="column" 
      padding={[16]} 
      radius={[6]} 
      gap={16}
      className={`${className} bg-gray4 body4`}
      {...rest}
    >
      <Flex gap={12} className="heading4 color-accent1">
        <Icon name={icon}/>{name}
      </Flex>
      {children}
    </Flex>
  );
}