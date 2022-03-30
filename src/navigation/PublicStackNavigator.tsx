import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import IndexScreen from '../screens/IndexScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackParamList } from '.';

export type PublicStackParamList = {
  Index: { stickerId: string } | undefined;
  NotFound: undefined;
};

export type PublicStackScreenProps<Screen extends keyof PublicStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<PublicStackParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

const Stack = createNativeStackNavigator<PublicStackParamList>();

export const PublicStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Index"
      component={IndexScreen}
      options={{ title: 'Index!' }}
    />
    <Stack.Screen
      name="NotFound"
      component={NotFoundScreen}
      options={{ title: 'Oops!' }}
    />
  </Stack.Navigator>
);
