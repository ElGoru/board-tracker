/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { CustomDarkTheme, CustomDarkAuthTheme } from '../constants/Colors';

import { linkingConfiguration } from './LinkingConfiguration';
import {
  PublicStackNavigator,
  PublicStackParamList,
} from './PublicStackNavigator';
import {
  PrivateStackNavigator,
  PrivateStackParamList,
} from './PrivateStackNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  PublicNavigator: NavigatorScreenParams<PublicStackParamList> | undefined;
  PrivateNavigator: NavigatorScreenParams<PrivateStackParamList> | undefined;
};
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer linking={linkingConfiguration} theme={CustomDarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="PublicNavigator"
          component={PublicStackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivateNavigator"
          component={withAuthenticator(
            PrivateStackNavigator,
            false,
            [],
            null,
            CustomDarkAuthTheme,
          )}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
