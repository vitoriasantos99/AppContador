import React, { useState }  from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import estilo from "./estilo";


export default props => {
    // let numero = props.inicial
    const [numero,setNumero] = useState(props.inicial)

    const inc = () => {setNumero (numero + 1)}
    const dec = () => {setNumero (numero - 1) }

    return(
        <View>
            <Image
            source={require('../images/contador.png')}
            style={
            {
                width: 150,
                height: 150,
            }
            }
            />
            <Text style={estilo.txtG}>Contador</Text>
            <Text style={[estilo.txtG, style.fundo]}>{numero}</Text>
            <View style={style.botao}>
            <Button  title="+" onPress={inc}/>
            </View>
            <Button title="-" onPress={dec}/>
            
            
        </View>
    )
}

const style = StyleSheet.create({
    fundo:{
        textAlign: 'center',
    },
    botao:{
        marginBottom: 5,
    }
})