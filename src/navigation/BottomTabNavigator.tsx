import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Auth } from 'aws-amplify';
import React from 'react';
import { Pressable } from 'react-native';

import FindScreen from '../screens/FindScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootTabParamList, RootTabScreenProps } from '../types/navigation';
import { CustomDarkTheme } from '../constants/Colors';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
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
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
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
