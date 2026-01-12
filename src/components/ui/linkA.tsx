import Link from "next/link";
import { Style, StyleProps } from "@/components/style";
import { type Url } from "next/dist/shared/lib/router/router";
import { color, Color } from "@/types";
import { CSSObject } from "@emotion/react";
import { useRouter } from "next/router";


// Link types
type Target = "_blank"|"_self"|"_top";
type Colors = [Color, Color];
// Link interface
export interface LinkAProps extends StyleProps {
  href?: Url,
  target?: Target,
  colors?: Colors,
  disabled?: boolean
}

export const LinkA = ({
  children,
  href,
  target = "_self",
  colors = ["gray1", "gray2"],
  vyakStyle,
  sizeStyle,
  disabled,
  ...rest
}: LinkAProps) => {

   const { basePath } = useRouter();

  const linkAStyle: CSSObject = {
    color: color[colors[0]],
    cursor: "pointer",
    "&:hover": {
      color: color[colors[1]],
    },
    pointerEvents: `${disabled? "none": "all"}`,
    ...vyakStyle
  }

  if (href) {
    return (
      <Style
        vyakStyle={linkAStyle}
        sizeStyle={sizeStyle}
        {...rest}
      >
        <Link 
          href={`${basePath}${href}`} 
          target={target}
        >
          {children}
        </Link>
      </Style>
    );
  } else {
    return (
      <Style
        vyakStyle={linkAStyle}
        sizeStyle={sizeStyle}
        {...rest}
      >
        {children}
      </Style>
    );
  }
}