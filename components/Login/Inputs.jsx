import React, {useState} from "react";
import { View, KeyboardAvoidingView, TextInput, StyleSheet,
     Text, Platform, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';

const Inputs = () => {
    let [oculto, setOculto] = useState(true)
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.contenedorDelContendor}>
            <View style={styles.contenedorLogin}>
                <View>
                    <View style={{flexDirection:'row', paddingTop:20}}>
                        <Text style={styles.textoCorreo}>Correo electrónico</Text>
                        <Text style={styles.asterisco}> *</Text>
                    </View>
                    <TextInput style={styles.inputCorreo} placeholder="Ingresar correo electrónico"></TextInput>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textoCorreo}>Contraseña</Text>
                        <Text style={styles.asterisco}> *</Text>
                    </View>
                    <View style={styles.cotainerPassword}>
                        <TextInput style={styles.inputContrasena} secureTextEntry={oculto} placeholder="Ingresar contraseña"></TextInput>
                        <TouchableWithoutFeedback onPress={()=> setOculto(!oculto)}>
                            <View style={{width:40, height:30, alignItems:'center', justifyContent:'center'}}>
                                    {oculto?<Image style={styles.ojoAbierto} source={require('../../assets/abierto.png')}/>:
                                    <Image style={styles.ojoCerrado} source={require('../../assets/cerrado.png')}/>}
                            </View>
                        </TouchableWithoutFeedback>
                        {/* <View style={{alignSelf:'center'}}>
                            <TouchableWithoutFeedback onPress={()=> setOculto(!oculto)}>
                                {oculto?<Image style={styles.ojoAbierto} source={require('../../assets/abierto.png')}/>:
                                <Image style={styles.ojoCerrado} source={require('../../assets/cerrado.png')}/>}
                            </TouchableWithoutFeedback>
                        </View> */}
                    </View>
                    <View style={{alignItems:'flex-end', marginBottom:25}}>
                        <Text style={styles.textoRecuperar}>Recuperar contraseña?</Text>
                    </View>
                    <TouchableWithoutFeedback>
                        <View style={styles.contenedorIngresar}>
                            <Text style={styles.textoIngresar}>Ingresar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    contenedorDelContendor:{
        flex:1,
        justifyContent: "space-around",
    },
    contenedorLogin:{
        backgroundColor:'#F4F6F8',
        padding:26,
        // margin:20,
        paddingLeft:26,
        paddingTop:26,
        paddingRight:26,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        borderRadius:15,
        shadowColor: "#5E07D161",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
        marginBottom:60,
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
        flex:1,
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
});

export default Inputs;