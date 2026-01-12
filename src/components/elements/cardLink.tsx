import { StyleProps } from "@/components/style";
import { color, Icons } from "@/types";
import { Url } from "next/dist/shared/lib/router/router";
import { Flex, Icon, LinkA } from "@/components/ui";
import { CSSObject } from "@emotion/react";

export interface CardLinkProps extends StyleProps {
  icon: Icons,
  href: Url
}

export const CardLink = ({
  children,
  icon,
  href,
  ...rest
}: CardLinkProps) => {

  const CardLinkStyle: CSSObject = ({
    backgroundColor: color.gray1,
    "&:hover": {
      backgroundColor: color.accent3
    }
  });

  return (
    <LinkA href={href} colors={["gray5", "gray5"]} {...rest}>
      <Flex vyakStyle={CardLinkStyle} className="heading2" padding={[20]} gap={16} radius={[12]}>
        <Icon name={icon}/>
        {children}
      </Flex>
    </LinkA>
  );
}