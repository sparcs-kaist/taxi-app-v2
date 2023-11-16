import theme from "tools/theme";
import { css } from "@emotion/native";
import {Pressable, View} from "react-native";

type ButtonAboveFooterProps = {
  text: string;
  onPress?: () => void;
};

const ButtonAboveFooter = ({ text, onPress }: ButtonAboveFooterProps) => (
  <View style={css` 
  ...theme.font12;
   padding: 6px;
   `}>
    <Pressable
      onPress={onPress}
      style={css`
        textDecoration: none;
        color: ${theme.gray_text};
        ...theme.cursor();
      `}
    >
      {text}
    </Pressable>
  </View>
);

export default ButtonAboveFooter;
