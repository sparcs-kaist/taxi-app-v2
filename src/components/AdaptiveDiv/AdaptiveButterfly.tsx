import {ReactNode} from 'react';

import useButterflyState from 'hooks/useButterflyState';

import AdaptiveCenter from './AdaptiveCenter';

import theme from 'tools/theme';
import { View } from 'react-native';
import {css} from "@emotion/native";

export type AdaptiveButterflyProps = {
  left?: ReactNode;
  right?: ReactNode;
};

const butterflyGap = '15px';

const AdaptiveButterfly = ({left, right}: AdaptiveButterflyProps) => {
  const butterflyState = useButterflyState();

  if (butterflyState === 'fold' || !right)
    return <AdaptiveCenter>{left}</AdaptiveCenter>;

  const styleColumn = css`
    width: calc(calc(min(100%, ${theme.adaptivediv.butterfly_device_max_width.wide
    }px) - ${butterflyGap} - ${theme.adaptivediv.margin * 2}px) / 2);
  `;

  return (
    <View
      style={css`
        display: flex;
        gap: ${butterflyGap};
        justifyContent: center;
      `}>
      <View style={styleColumn}>{left}</View>
      <View style={styleColumn}>{right}</View>
    </View>
  );
};

export default AdaptiveButterfly;
