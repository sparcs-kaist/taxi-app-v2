import { useEffect } from "react";
import { ChannelIO } from 'react-native-channel-plugin';

import errorAtom from "atoms/error";
import loginInfoAtom from "atoms/loginInfo";
import { useRecoilValue } from "recoil";

import { channelTalkPluginKey } from "tools/loadenv";

export default () => {
  const loginInfo = useRecoilValue(loginInfoAtom);
  const error = useRecoilValue(errorAtom);

  useEffect(() => {
    if (channelTalkPluginKey && loginInfo) {
      ChannelIO.updateUser({
        profile: {
          name: loginInfo?.name,
          email: loginInfo?.email,
        },
      });
    }
  }, [loginInfo]);

  useEffect(() => {
    if (channelTalkPluginKey) {
      ChannelIO.boot({
        pluginKey: channelTalkPluginKey,
      });
    }
  }, [error]);
};
