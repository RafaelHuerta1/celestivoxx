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

            <ExternalLink url='https://palabra-de-dioss.blogspot.com/2024/08/politicas-de-privacidad-de-celestialvox.html'
           
            >Politicas de privacidad</ExternalLink>
           

            <View>
            <Text
                style={{
                    marginTop: 120,
                    fontSize: 20,
                    textAlign: "center",
                    margin: 20,
                    borderBlockColor: 'black',
                    borderWidth: 1,
                    padding: 10,
                }}
            >
                Si gustas UNIRTE GRATIS a nuestro grupo de oracion en WhatsApp, haz clic en el siguiente enlace:
                
            </Text>
            <ExternalLink url='https://palabra-de-dioss.blogspot.com/2024/08/politicas-de-privacidad-de-celestialvox.html'>Grupo de WhatsApp</ExternalLink>
           
            </View>

        </View>
    );
}

export default Configuracion;