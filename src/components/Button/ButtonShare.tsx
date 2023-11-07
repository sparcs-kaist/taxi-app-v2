import theme from "tools/theme";

import { Pressable, View } from "react-native";
import { css } from "@emotion/native";

type ButtonShareProps = {
  text: string;
  icon: React.ReactNode;
  background: string;
  onPress?: () => void; //CHANGES: onClick -> onPress
};

const ButtonShare = ({ text, icon, background, onPress }: ButtonShareProps) => (
  <Pressable
    style={css`{
      width: "45px",
      cursor: "pointer",
    }`}
    onPress={onPress}
  >
    <View
      style={css`{
        width: "45px",
        height: "45px",
        borderRadius: "6px",
        backgroundColor: background,
        boxShadow: theme.shadow_gray_button_inset,
        color: theme.gray_text,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }`}
    >
      {icon}
    </View>
    <View
      style={css`{
        ...theme.font10,
        color: theme.gray_text,
        textAlign: "center",
        paddingTop: "4px",
      }`}
    >
      {text}
    </View>
  </Pressable>
);

export default ButtonShare;
