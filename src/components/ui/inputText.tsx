import { StyleProps } from "@/components/style";
import { Flex } from "@/components/ui";
import { color, rem } from "@/types";
import { CSSObject } from "@emotion/react";

export interface InputTextProps extends StyleProps {
  width?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  pattern?: string,
  height?: string
}

export const InputText = ({
  children,
  vyakStyle,
  width = "8rem",
  height = "2.25rem",
  value,
  pattern,
  onChange,
  ...rest
}: InputTextProps) => {

  const spanStyle: CSSObject = {
    fontFamily: `var(--font-body)`,
    fontSize: `calc(${rem} * 16)`,
    fontWeight: 500,
    transform: `translateY(-28px) translateX(-8px)`
  }

  const inputTextStyle: CSSObject = {
    width: width,
    height: height,
    backgroundColor: color.gray1,
    color: color.gray5,
    cursor: "text",
    "&:hover": {
      backgroundColor: color.gray2,
      color: color.gray4
    },
    "&:focus-within": {
      backgroundColor: color.accent3,
      color: color.gray5,
      "span": {
        color: color.accent3,
        ...spanStyle
      }
    },
    "input:not(:placeholder-shown):not(:focus) ~ span": {
      color: color.gray1,
      ...spanStyle
    },
    ...vyakStyle
  }


  const inputStyle: CSSObject = {
    width: width,
    height: height,
    position: "absolute",
    background: "none",
    transform: "translateY(-6px)"
  }

  return (
    <Flex as="label" vyakStyle={inputTextStyle} padding={[6]} radius={[4]} {...rest}>
      <input type="text" placeholder="" onChange={onChange} value={value} pattern={pattern} style={inputStyle as React.CSSProperties}/>
      <Flex as="span">{children}</Flex>
    </Flex>
  )
}