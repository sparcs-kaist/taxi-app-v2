import theme from "@/tools/theme";
import { View, Text } from "react-native";
import { css } from "@emotion/native";

type ButtonAboveFooterProps = {
  text: string;
  onClick?: () => void;
};

const ButtonAboveFooter = ({ text, onClick }: ButtonAboveFooterProps) => (
  <View
    style={css`
      padding: 6px;
    `}
  >
    <Text
      onPress={onClick}
      style={css`
      ...theme.font12;
        color: ${theme.gray_text};
        ...theme.cursor();
      `}
    >
      {text}
    </Text>
  </View>
);

export default ButtonAboveFooter;
