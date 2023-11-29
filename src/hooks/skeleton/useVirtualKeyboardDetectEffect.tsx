import { useEffect } from "react";

import isVirtualKeyboardDetectedAtom from "atoms/isVirtualKeyboardDetected";
import { useSetRecoilState } from "recoil";
import { Keyboard } from "react-native";

export default () => {
  const setIsVKDetected = useSetRecoilState(isVirtualKeyboardDetectedAtom);

  useEffect(() => {
    setIsVKDetected(Keyboard.isVisible())
  }, []);
};
