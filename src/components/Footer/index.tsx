import { ReactNode, memo, useCallback, useState } from "react";
import { View, Text, Linking, Pressable } from "react-native";
import { css } from "@emotion/native";

// import { Link } from "react-router-dom";
import { Link } from "react-router-native";

import { ModalCredit, ModalPrivacyPolicy } from "components/ModalPopup";

import ButtonAboveFooter from "./ButtonAboveFooter";

import SparcsLogo from "static/assets/sparcsLogos/SparcsLogoWithText.svg";

type FooterProps = {
  type?: "only-logo" | "full" | "event-2023fall";
  children?: ReactNode;
};

const Footer = ({ type = "full", children }: FooterProps) => {
  const [isOpenPrivacyPolicy, setIsOpenPrivacyPolicy] = useState(false);
  const [isOpenCredit, setIsOpenCredit] = useState(false);

  const onClickPrivacyPolicy = useCallback(
    () => setIsOpenPrivacyPolicy(true),
    [setIsOpenPrivacyPolicy]
  );
  const onClickCredit = useCallback(
    () => setIsOpenCredit(true),
    [setIsOpenCredit]
  );

  return (
    <View style={{ paddingTop: 10, alignContent: "center" }}>
      {children}
      {type === "full" && (
        <>
          <ModalPrivacyPolicy
            isOpen={isOpenPrivacyPolicy}
            onChangeIsOpen={setIsOpenPrivacyPolicy}
          />
          <ModalCredit isOpen={isOpenCredit} onChangeIsOpen={setIsOpenCredit} />
          <View>
            <ButtonAboveFooter text="채널톡 문의하기" />
          </View>
          <ButtonAboveFooter
            text="개인정보 처리방침"
            onClick={onClickPrivacyPolicy}
          />
          <ButtonAboveFooter text="택시 살펴보기" />
          <Link
            to="/event/2023spring-guide"
            style={css`
              textdecoration: "none";
            `}
          >
            <ButtonAboveFooter text="택시 살펴보기" />
          </Link>
          <ButtonAboveFooter text="만든 사람들" onClick={onClickCredit} />
        </>
      )}
      {type === "event-2023fall" && (
        <>
          <ModalCredit
            defaultSelectedCatagory="2023FallEvent"
            isOpen={isOpenCredit}
            onChangeIsOpen={setIsOpenCredit}
          />
          <ButtonAboveFooter
            text="한가위 송편 이벤트를 만든 사람들"
            onClick={onClickCredit}
          />
          <Link
            to="/event/2023spring-guide"
            style={css`
              textdecoration: "none";
            `}
          >
            <ButtonAboveFooter text="택시 살펴보기" />
          </Link>
          <View>
            <ButtonAboveFooter text="채널톡 문의하기" />
          </View>
        </>
      )}
      <View
        style={css`
          padding: "6px";
        `}
      >
        <Pressable
          onPress={() => Linking.openURL("https://sparcs.org/")}
          // (target = "_blank"),
          // (rel = "noreferrer")
        >
          <Text>asd</Text>
          {/* <SparcsLogo height={27} opacity={0.632} /> */}
        </Pressable>
      </View>
    </View>
  );
};

export default memo(Footer);
