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

import { CustomDarkTheme, CustomDarkAuthTheme } from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import RegisterBoardScreen from '../screens/RegisterBoardScreen';
import IndexScreen from '../screens/IndexScreen';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Platform } from 'react-native';

export default function Navigation() {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={CustomDarkTheme}
        >
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
            initialRouteName={Platform.OS === 'web' ? 'Index' : 'Root'}
        >
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

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: CustomDarkTheme.colors.accent,
                tabBarInactiveTintColor: CustomDarkTheme.colors.text,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }: RootTabScreenProps<'Home'>) => ({
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <MaterialCommunityIcons
                                name="account"
                                size={25}
                                color={CustomDarkTheme.colors.accent}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    title: 'Tab Two',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="map-search" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    color: string;
}) {
    return (
        <MaterialCommunityIcons
            size={30}
            style={{ marginBottom: -3 }}
            {...props}
        />
    );
}
