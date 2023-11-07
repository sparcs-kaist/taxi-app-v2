import { HTMLProps, ReactNode } from "react";

import useHoverProps from "hooks/theme/useHoverProps";

import theme from "tools/theme";

import {Pressable, View} from "react-native";
import {css} from "@emotion/native";

type ButtonType = "purple" | "purple_inset" | "gray" | "white";

type ButtonProps = {
  type?: ButtonType;
  disabled?: boolean;
  children?: ReactNode;
  onPressed?: () => void; //CHANGES: onClick -> onPressed
};//TODO: find the alternative for the HTML Properties supports for div element

const Button = ({
  type,
  disabled = false,
  children,
  onPressed,
  ...divProps
}: ButtonProps) => {
  const [hoverProps, isHover, isClicked] = useHoverProps();

  const getColor = () => {
    switch (type) {
      case "purple":
        return {
          backgroundColor: disabled
            ? theme.purple_disabled
            : isHover
            ? theme.purple_dark
            : theme.purple,
          color: theme.white,
          boxShadow:
            isClicked && !disabled ? theme.shadow_clicked : theme.shadow,
        };
      case "purple_inset":
        return {
          backgroundColor: disabled
            ? theme.purple_disabled
            : isHover
            ? theme.purple_dark
            : theme.purple,
          color: theme.white,
          boxShadow: theme.shadow_purple_button_inset,
        };
      case "gray":
        return {
          backgroundColor: isHover ? theme.gray_line : theme.gray_background,
          color: isHover ? theme.white : theme.gray_text,
          boxShadow: theme.shadow_gray_button_inset,
          fontWeight: isHover ? 500 : undefined,
        };
      case "white":
        return {
          backgroundColor: isHover ? theme.purple_hover : theme.white,
          color: theme.purple,
          boxShadow:
            isClicked && !disabled ? theme.shadow_clicked : theme.shadow,
        };
    }
  };

  const style = css`{
    transitionDuration: theme.duration,
    textAlign: "center" as const,
    ...theme.cursor(disabled),
    ...getColor(),
  }`;

  return (
    <Pressable
      style={style}
      onPress={disabled ? undefined : onPressed}
      {...hoverProps}
      {...divProps}
    >
      {children}
    </Pressable>
  );
};

export default Button;
