import { useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-native";

import { deviceType } from "tools/loadenv";
import { sendAuthLogoutEventToFlutter } from "tools/sendEventToFlutter";

type LinkLogoutProps = {
  children: React.ReactNode;
  redirect?: string;
};

export const useOnClickLogout = (redirect?: string) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const redirectPath = redirect || pathname + search;
  const isClicked = useRef(false);

  return useCallback(async () => {
    if (isClicked.current) return;
    isClicked.current = true;
    if (deviceType.startsWith("app/")) await sendAuthLogoutEventToFlutter();
    navigate(`/logout?redirect=${encodeURIComponent(redirectPath)}`);
    isClicked.current = false;
  }, [navigate, redirectPath]);
};

const LinkLogout = ({ children, redirect }: LinkLogoutProps) => {
  const onClickLogout = useOnClickLogout(redirect);
  return <div onClick={onClickLogout}>{children}</div>;
};

export default LinkLogout;
