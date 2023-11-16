import { ReactNode, memo } from "react";
// TODO: remove Link from react-router-dom
// import { Link } from "react-router-dom";

import {View} from "react-native";

import { css } from "@emotion/native";

import HeaderWithBackButton from "./HeaderWithBackButton";

import theme from "tools/theme";

type ButtonNavProps = {
  selected?: boolean;
  children?: ReactNode;
};

const ButtonNav = ({ selected, children }: ButtonNavProps) => (
  <View style={css`{ position: "relative" }`}>
    <View
      style={css`{
        ...theme.font16_bold,
        color: selected ? theme.purple : theme.purple_disabled,
      }`}
    >
      {children}
    </View>
    <View
      style={css`{
        position: "absolute",
        bottom: "-6px",
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }`}
    >
      <View
        style={css`{
          height: "2px",
          width: "16px",
          background: theme.purple,
          opacity: selected ? 1 : 0,
          borderRadius: "1px",
        }`}
      />
    </View>
  </View>
);

type HeaderWithLeftNavProps = {
  value?: string;
  options?: Array<{ value: string; label: string; to: string }>;
};

const HeaderWithLeftNav = ({ value, options = [] }: HeaderWithLeftNavProps) => (
  <HeaderWithBackButton>
    <View style={css`{ display: "flex", gap: "16px" }`}>
      <View style={css`{ flexGrow: 1 }`} />
      {/* {options.map(({ value: _value, label, to }) => (
        <Link key={label} to={to} css={{ textDecoration: "none" }} replace>
          <ButtonNav key={label} selected={_value === value}>
            {label}
          </ButtonNav>
        </Link>
      ))} */}
    </View>
  </HeaderWithBackButton>
);

export default memo(HeaderWithLeftNav);
