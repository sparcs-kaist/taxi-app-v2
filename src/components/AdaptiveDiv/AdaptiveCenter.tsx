import { HTMLProps, ReactNode } from "react";
import { View } from "react-native";
import { css } from "@emotion/native";

import theme from "tools/theme";

export type AdaptiveCenterProps = {
  children?: ReactNode;
}; //TODO: find the alternative for the HTML Properties supports for div element

const AdaptiveCenter = ({
  children,
  ...divProps //TODO: divProps가 사용 가능한지 여부
}: AdaptiveCenterProps) => (
  <View
    style={css`
      position: relative;
      width: calc(
        min(${theme.adaptivediv.center_device_max_width}px, 100%) -
          ${theme.adaptivediv.margin * 2}px
      );
      margin: auto;
    `}
    {...divProps}
  >
    {children}
  </View>
);

export default AdaptiveCenter;
