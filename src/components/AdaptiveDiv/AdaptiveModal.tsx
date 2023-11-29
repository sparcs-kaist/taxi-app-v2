import { ReactNode } from "react";

import theme from "tools/theme";

import { css } from "@emotion/native";
import { Pressable } from "react-native";

export type AdaptiveModalProps = {
  width?: number;
  children: ReactNode;
};

const AdaptiveModal = ({
  width = parseInt(theme.modal_width),
  children,
}: AdaptiveModalProps) => {
  return (
    <Pressable
      style={{
        width:
          width < width - 2 * theme.adaptivediv.margin
            ? width
            : width - 2 * theme.adaptivediv.margin,
      }}
      onPress={(e) => e.stopPropagation()}
      onPressOut={(e) => e.stopPropagation()}
    >
      {children}
    </Pressable>
  );
};

export default AdaptiveModal;
