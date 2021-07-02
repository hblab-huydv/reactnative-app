import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold
} from "@expo-google-fonts/nunito";

import AppLoading from 'expo-app-loading';

import Home from './screens/home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Home />
  );

  
}

