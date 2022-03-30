import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import ModalScreen from '../screens/ModalScreen';
import RegisterBoardScreen from '../screens/RegisterBoardScreen';

import {
  PrivateTabNavigator,
  PrivateTabParamList,
} from './PrivateTabNavigator';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { RootStackParamList } from '.';

export type PrivateStackParamList = {
  PrivateTabNavigator: NavigatorScreenParams<PrivateTabParamList> | undefined;
  Modal: undefined;
  RegisterBoard: undefined;
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
        <Stack.Screen
          name="RegisterBoard"
          component={RegisterBoardScreen}
          options={{ title: 'RegisterBoardScreen' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
