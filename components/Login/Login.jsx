import {View, StyleSheet, Text,
    Image, TextInput, TouchableWithoutFeedback,
} from "react-native";
import React, {useState} from "react";
import Inputs from "./Inputs";

const Login = ({navigation})=> {
    let [oculto, setOculto] = useState(true)
    return (
        <View style={{flex:1}}>
            <View style={styles.fondoGris}>
                <View style={styles.powered}>
                    <Text style={styles.textoMultifiber}>Powered by Multifiber</Text>
                    <Text style={styles.textoMultifiber}>V 1.1.0</Text>
                </View>
            </View>
            <Text style={styles.bienvendio}>Bienvenido a</Text>
            <View style={styles.acme}>
                <Image style={styles.img} source={require('../../assets/aCMEB.png')}/>
            </View>
            <Inputs navigation={navigation}/>
        </View> 
    )
}

export default Login; 

const styles = StyleSheet.create(
    {
        bienvendio:{
            paddingLeft:20,
            paddingTop:110,
            color:'#F4F6F8',
            fontSize:34,
            fontWeight:'bold',
            fontStyle:'lato',
            paddingBottom:10,

        },
        acme:{
            marginLeft:20,
            justifyContent:'center'
        },
        img:{
            width:150,
            height:90,
        },
        fondoGris:{
            backgroundColor:'#F3F3F3',
            position:"absolute",
            left:0,
            bottom:0,
            height:295,
            width:'100%',
            justifyContent:'flex-end'
            
        },
        ojoAbierto:{
            width:18,
            height:8,
            // marginRight:10,
        },
        ojoCerrado:{
            width:18,
            height:14,
            // marginRight:10,
        },
        contenedorLogin:{
            backgroundColor:'#F4F6F8',
            padding:26,
            margin:20,
            borderRadius:15,
            shadowColor: "#5E07D161",
            shadowOffset: {
                width: 0,
                height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,
            elevation: 18,
            marginBottom:30,
        },
        textoCorreo:{
            color:'#131523',
            fontWeight:'bold',
            fontStyle:'lato',
            fontSize:14,
            lineHeight:22,
            paddingBottom:8,
        },
        asterisco:{
            color:'#2B80FF',
            fontWeight:'bold',
            fontStyle:'lato',
            fontSize:14,
            lineHeight:22
        },
        textoRecuperar:{
            color:'#2B80FF',
            fontWeight:'bold',
            fontStyle:'lato',
            fontSize:14,
        },
        inputCorreo:{
            backgroundColor:'#FFFFFF',
            borderColor:'#E0E0E0',
            borderWidth:1,
            borderRadius:3,
            height:38,
            fontSize:12,
            padding:12,
            color:'#868D96',
            marginBottom:15,
        },
        cotainerPassword:{
            backgroundColor:'#FFFFFF',
            borderColor:'#E0E0E0',
            borderWidth:1,
            borderRadius:3,
            height:38,
            flexDirection:"row",
            justifyContent:'space-between',
            alignItems:'center',
            paddingLeft:12,
            marginBottom:15,
        },
        inputContrasena:{
            fontSize:12,
            height:36,
            color:'#868D96',
        },
        contenedorIngresar:{
            backgroundColor:'#2B80FF',
            borderRadius:3,
            alignItems:'center',
            justifyContent:'center',
            height:34,
            marginBottom:25,
        },
        textoIngresar:{
            color:'#FFFFFF',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:12,
        },
        textoMultifiber:{
            color:'#00000099',
            fontWeight:'bold',
            fontStyle:'lato',
            fontSize:10,
        },
        powered:{
            justifyContent:"center",
            alignItems:"center",
            marginBottom:20,
        }
    }
)