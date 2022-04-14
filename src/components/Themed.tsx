/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react';
import { View as DefaultView } from 'react-native';
import { useTheme } from 'react-native-paper';

export const View = (props: DefaultView['props']) => {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();
  const backgroundColor = colors.background;
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
