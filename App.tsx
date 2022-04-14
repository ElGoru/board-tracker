import React from 'react';
import Amplify from 'aws-amplify';
import { StatusBar } from 'expo-status-bar';
import { useCachedResources } from './src/hooks/useCachedResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { Navigation } from './src/navigation';
import { CustomDarkTheme } from './src/constants/Colors';
import config from './src/aws-exports';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

export default function App() {
  const isLoadingComplete = useCachedResources();

  const queryClient = new QueryClient();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={CustomDarkTheme}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </PaperProvider>
      </QueryClientProvider>
    );
  }
}
