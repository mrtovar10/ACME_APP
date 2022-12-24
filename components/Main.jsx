import React from "react";
import { View, Text, StatusBar, ImageBackground } from "react-native";
import Constants from "expo-constants";
import ListaDeOrdenes from "./ListaDeOrdenes";
import AbiertaCerrada from "./AbiertasCerradas";
import ListaFechas from "./ListaFechas";
import TecnicoHeader from "./TecnicoHeader";
import Background from "./Login/Background";
import Login from "./Login/Login";
import Inputs from "./Login/Inputs";
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

const RutaLogin = () => {
    return (
        <View style={estilos}>
            <StatusBar translucent backgroundColor='transparent' />
            <Background/>
        </View>
    )
}

const RutaListaOrdenes = () => {
    return (
        <View style={estilos}>
            <TecnicoHeader/>
            <ListaFechas/>
            <AbiertaCerrada/>
            <ListaDeOrdenes/>
        </View>
    )
}

const Main = () => {
    StatusBar.setBackgroundColor("rgba(0, 75, 194, 0.82)",false)
    StatusBar.setBarStyle('light-content')
    return (
        // Listado de Ordenes
        // <View style={estilos}>
        //     <TecnicoHeader/>
        //     <ListaFechas/>
        //     <AbiertaCerrada/>
        //     <ListaDeOrdenes/>
        // </View>

        // Login
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component = {RutaLogin}
            />
            <Stack.Screen
            name='Ordenes'
            component = {RutaListaOrdenes}
            />
        </Stack.Navigator>
        // <View style={estilos}>
        //     <StatusBar translucent backgroundColor='transparent' />
        //     <Background/>
        // </View>

        //Keyboard
        // <Inputs/>
    )
}

const estilos = {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor:'#0057DA',
    flex:1,
}

export default Main