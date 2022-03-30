/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Platform } from 'react-native';
import { Auth } from 'aws-amplify';

import { CustomDarkTheme, CustomDarkAuthTheme } from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types/navigation';
import RegisterBoardScreen from '../screens/RegisterBoardScreen';
import IndexScreen from '../screens/IndexScreen';

import LinkingConfiguration from './LinkingConfiguration';
import { BottomTabNavigator } from './BottomTabNavigator';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={CustomDarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Platform.OS === 'web' ? 'Index' : 'Root'}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{ title: 'Index!' }}
      />
      <Stack.Screen
        name="Root"
        component={withAuthenticator(
          BottomTabNavigator,
          false,
          [],
          null,
          CustomDarkAuthTheme,
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterBoardScreen"
        component={RegisterBoardScreen}
        options={{ title: 'RegisterBoardScreen' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
