import React from "react";
import { ImageBackground, StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./Login.jsx";
import { Dimensions } from "react-native";
const image = require('../../assets/fondoLogin.png');

const Background = ({navigation}) => {
  console.log('altura screen ',Dimensions.get('screen').height)
  console.log('altura window ',Dimensions.get('window').height)
  return (
  <View style={styles.superContainer}>
      <StatusBar translucent backgroundColor='transparent' />
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Login navigation={navigation}/>
      </ImageBackground>
    </View>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0057DA',
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
  },
  superContainer:{
    // backgroundColor:'#0057DA',
    backgroundColor:'red',
    flex:1,
  }
});

export default Background;