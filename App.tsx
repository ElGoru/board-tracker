import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useCachedResources from './src/hooks/useCachedResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation';
import { CustomDarkTheme } from './src/constants/Colors';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure({
    ...config,
    Analytics: {
        disabled: true,
    },
});

export default function App() {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <PaperProvider theme={CustomDarkTheme}>
                <SafeAreaProvider>
                    <Navigation />
                    <StatusBar />
                </SafeAreaProvider>
            </PaperProvider>
        );
    }
}
