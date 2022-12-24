import React from "react";
import { ImageBackground, StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./Login.jsx";
import { Dimensions } from "react-native";
const image = require('../../assets/fondoLogin.png');

const Background = () => {
  console.log('altura screen ',Dimensions.get('screen').height)
  console.log('altura window ',Dimensions.get('window').height)
  return (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Login/>
    </ImageBackground>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + StatusBar.currentHeight,
    // height:500,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default Background;