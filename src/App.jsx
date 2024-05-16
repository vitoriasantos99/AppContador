import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import estilo from "./components/estilo";
import Contador from "./components/Contador";

export default () =>{
    return(
        <View style={style.fundo}>
            <Contador inicial = {100} style={estilo.txtG}/>
        </View>
    )
}

const style = StyleSheet.create({
    fundo:{
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
    }
})