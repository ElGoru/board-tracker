import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Auth } from 'aws-amplify';
import { Pressable } from 'react-native';

import FindScreen from '../screens/FindScreen';
import HomeScreen from '../screens/HomeScreen';
import { CustomDarkTheme } from '../constants/Colors';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PrivateStackParamList } from './PrivateStackNavigator';

export type PrivateTabParamList = {
  Home: { reload: boolean } | undefined;
  Find: undefined;
};

export type PrivateTabScreenProps<Screen extends keyof PrivateTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<PrivateTabParamList, Screen>,
    NativeStackScreenProps<PrivateStackParamList>
  >;

const BottomTab = createBottomTabNavigator<PrivateTabParamList>();

export const PrivateTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: CustomDarkTheme.colors.accent,
        tabBarInactiveTintColor: CustomDarkTheme.colors.text,
        tabBarStyle: { overflow: 'hidden', paddingBottom: 3 },
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: PrivateTabScreenProps<'Home'>) => ({
          headerTitle: () => (
            <MaterialCommunityIcons
              name="all-inclusive"
              size={25}
              color={CustomDarkTheme.colors.accent}
              style={{ marginRight: 15 }}
            />
          ),
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={30} name="home" color={color} />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialCommunityIcons
                name="qrcode-edit"
                size={25}
                color={CustomDarkTheme.colors.accent}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => Auth.signOut()}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialCommunityIcons
                name="logout"
                size={25}
                color={CustomDarkTheme.colors.accent}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Find"
        component={FindScreen}
        options={{
          title: 'Find',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={30} name="map-search" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
