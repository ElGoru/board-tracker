import * as React from 'react';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { ModalScreen } from '../screens/ModalScreen';
import { RegisterBoardScreen } from '../screens/RegisterBoardScreen';
import { StickerScannerScreen } from '../screens/StickerScannerScreen';

import { RootStackParamList } from '.';
import {
  PrivateTabNavigator,
  PrivateTabParamList,
} from './PrivateTabNavigator';

export type PrivateStackParamList = {
  PrivateTabNavigator: NavigatorScreenParams<PrivateTabParamList> | undefined;
  Modal: undefined;
  RegisterBoard: { stickerId: string };
  StickerScanner: undefined;
};

export type PrivateStackScreenProps<
  Screen extends keyof PrivateStackParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<PrivateStackParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

const Stack = createNativeStackNavigator<PrivateStackParamList>();

export const PrivateStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PrivateTabNavigator"
        component={PrivateTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="StickerScanner" component={StickerScannerScreen} />
        <Stack.Screen
          name="RegisterBoard"
          component={RegisterBoardScreen}
          options={{ title: 'RegisterBoardScreen' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
