import Modal from "components/Modal";

import BodyCallTaxi from "./Body/BodyCallTaxi";

import theme from "tools/theme";

import {View} from "react-native";

import {css} from "@emotion/native";

// import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";

type ModalCallTaxiProps = Omit<
  Parameters<typeof Modal>[0],
  "padding" | "children"
> & { roomInfo: Room };

const ModalCallTaxi = ({ roomInfo, ...modalProps }: ModalCallTaxiProps) => {
  const styleTitle =css`{
    ...theme.font18,
    display: "flex",
    alignItems: "center",
    margin: "0 8px 12px",
  }`;
  const styleIcon = css`{
    fontSize: "21px",
    margin: "0 4px 0 0",
  }`;

  return (
    <Modal {...modalProps} padding="16px 12px 12px">
      <View 
      style = {styleTitle}>
        {/* <LocalTaxiRoundedIcon style={styleIcon} /> */}
        택시 호출하기
      </View>
      <BodyCallTaxi roomInfo={roomInfo} />
    </Modal>
  );
};

export default ModalCallTaxi;
export { ModalCallTaxi };
