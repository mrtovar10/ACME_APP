import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './components/Main';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
}
