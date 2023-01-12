import React from "react";
import { View} from "react-native";
import ListaDeOrdenes from "../ListaDeOrdenes";
import AbiertaCerrada from "../AbiertasCerradas";
import ListaFechas from "../ListaFechas";
import TecnicoHeader from "../TecnicoHeader";

const ListaCompleta = () => {
    return (
        <View style={estilos}>
            <TecnicoHeader/>
            <ListaFechas/>
            <AbiertaCerrada/>
            <ListaDeOrdenes/>
        </View>
    )
}

const estilos = {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor:'#0057DA',
    flex:1,
}

export default ListaCompleta