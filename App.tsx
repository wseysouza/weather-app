import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import Dashboard from '@screens/Dashboard';
import theme from './src/styles/theme';
import AppProvider from './src/hooks';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Dashboard />
      </AppProvider>
    </ThemeProvider>
  );
}
