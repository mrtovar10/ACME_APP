import React from "react";
import { View, Text, StatusBar, ImageBackground } from "react-native";
import Constants from "expo-constants";
import LoginCompleto from "./Login/LoginCompleto";
import {createStackNavigator} from '@react-navigation/stack'
import ListaCompleta from "./ListaDeOrdenes/ListaCompleta";

const Stack = createStackNavigator();

const Main = () => {
    StatusBar.setBackgroundColor("rgba(0, 75, 194, 0.82)",false)
    StatusBar.setBarStyle('light-content')

    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen
            name='Login'
            component = {LoginCompleto}
            // options={{ headerShown: true }}
            />

            <Stack.Screen
            name='Ordenes'
            component = {ListaCompleta}
            />
        </Stack.Navigator>
    )
}

const estilos = {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor:'#0057DA',
    flex:1,
}

export default Main