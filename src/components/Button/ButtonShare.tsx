import theme from "tools/theme";

import { Pressable, Text, TextStyle, View } from "react-native";
import { css } from "@emotion/native";

type ButtonShareProps = {
  text: string;
  icon: React.ReactNode;
  background: string;
  onClick?: () => void;
};

const ButtonShare = ({ text, icon, background, onClick }: ButtonShareProps) => (
  <Pressable
    style={css`
      width: 45px;
      cursor: pointer;
    `}
    onPress={onClick}
  >
    <View
      style={css`
        width: 45px;
        height: 45px;
        borderradius: 6px;
        backgroundcolor: ${background};
        boxshadow: ${theme.shadow_gray_button_inset};
        color: ${theme.gray_text};
        display: flex;
        alignitems: center;
        justifycontent: center;
      `}
    >
      {icon}
    </View>
    <Text
      style={[
        css`
          color: ${theme.gray_text};
          textalign: center;
          paddingtop: 4px;
        `,
        theme.font10 as TextStyle,
      ]}
    >
      {text}
    </Text>
  </Pressable>
);

export default ButtonShare;
