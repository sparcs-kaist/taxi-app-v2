import { ReactNode } from "react";

import theme from "tools/theme";

import {css} from "@emotion/native";
import { Pressable } from "react-native";

export type AdaptiveModalProps = {
  width?: PixelValue; // CSS["width"];
  children: ReactNode;
};

const AdaptiveModal = ({
  width = theme.modal_width,
  children,
}: AdaptiveModalProps) => {
  return (
    <Pressable
      style={css`{
        width: 'min(${width}, calc(100% - ${theme.adaptivediv.margin * 2}px))',
        margin: "auto",
      }`}
      onPress={(e) => e.stopPropagation()}
      onPressOut={(e) => e.stopPropagation()}
    >
      {children}
    </Pressable>
  );
};

export default AdaptiveModal;
