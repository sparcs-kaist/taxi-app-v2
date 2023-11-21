import { ReactNode } from "react";
// TODO: remove useHistory from react-router-native
// import { useHistory } from "react-router-native";

import AdaptiveDiv from "components/AdaptiveDiv";

import Header from ".";

import theme from "tools/theme";

import {View} from "react-native";

import { css } from "@emotion/native";

// TODO: Material Icon 
// import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

type HeaderWithBackButtonProps = {
  isDisplayBackBtn?: boolean;
  children?: ReactNode;
} & Omit<Parameters<typeof AdaptiveDiv>[0], "type">;

const HeaderWithBackButton = ({
  isDisplayBackBtn = true,
  children,
  ...adaptiveDivProps
}: HeaderWithBackButtonProps) => {
  // const history = useHistory();

  const styleBody = css`{
    height: "100%",
    display: "flex",
    gap: "16px",
    alignItems: "center",
  }`;
  const styleIconLarge = css`{
    fill: theme.purple,
    ...theme.cursor(),
    width: "24px",
    height: "24px",
  }`;

  return (
    <Header>
      <AdaptiveDiv type="center" css={styleBody} {...adaptiveDivProps}>
        {/* {isDisplayBackBtn && (
          <ArrowBackRoundedIcon
            style={styleIconLarge}
            onClick={
              history.length <= 1
                ? () => history.replace("/myroom")
                : () => history.goBack()
            }
          />
        )} */}
        <View style={css`{ flexGrow: 1 }`}>{children}</View>
      </AdaptiveDiv>
    </Header>
  );
};

export default HeaderWithBackButton;
