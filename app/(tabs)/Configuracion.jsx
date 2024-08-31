import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import ExternalLink from '../components/LinksDinamicos';

const Configuracion = () => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 20,
                    textAlign: "center",
                    margin: 20,
                    fontWeight: 'bold',
                    paddingBottom: 13,
                   // borderWidth: 1,
                    borderBottomWidth: 1,
                }}
            >
                Gracias por utilizar nuestra aplicación, celestilavox, proximamente agregaremos más funcionalidades
            </Text>

            <ExternalLink url='https://palabra-de-dioss.blogspot.com/2024/08/politicas-de-privacidad-de-celestialvox.html'>Politicas de privacidad</ExternalLink>
           
        </View>
    );
}

export default Configuracion;