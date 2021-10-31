import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure({
    ...config,
    Analytics: {
        disabled: true,
    },
});

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
            ...DefaultTheme.colors,
            primary: 'tomato',
            accent: 'yellow',
        },
    };
    theme.dark = useColorScheme() == 'dark';

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <PaperProvider theme={theme}>
                <SafeAreaProvider>
                    <Navigation />
                    <StatusBar />
                </SafeAreaProvider>
            </PaperProvider>
        );
    }
}
