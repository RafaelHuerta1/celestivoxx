import React, {useState} from "react";
import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";

const CrearOrc = () => {


    const [nombre, setNombre] = useState('');
    const [intencion, setIntencion] = useState('');


    const limpiarOracion = () => {
        setIntencion('');
        setNombre('');
    }


    console.log(nombre);

    return (
        <View>
            <View
            style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop:15,
                marginRight: 25,
            }}
            
            >
                    <Button
                    title="Iniciar Sesión"
                    color="#841584"
                    onPress={() => alert('Iniciar Sesión')}

                    
                    /> 
            </View>


            <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
                
            }}
            >
                    <Text
                    style={{    
                        fontSize: 20,
                        fontWeight: '500',
                        textAlign: 'center',
                        margin: 20,
                    }}
                
                    
                    >
                        Ora de manera personalizada para tus seres queridos y comparte la en tus redes sociales.
                    </Text>
            </View>
           

            <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 80,
            }}
            >
                <TextInput

                onChangeText={(nombre) => setNombre(nombre)}
                value={nombre}
                    style={{
                        height: 'auto',
                        width: 300,
                        minHeight: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 10,
                        textAlign: 'center',
                    }}
                    placeholder="Nombre"
                />

                <TextInput
                    style={{
                        height: 'auto',
                        width: 300,
                        minHeight: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 10,
                        textAlign: 'center',
                        marginTop: 10,
                    }}
                    placeholder="Intención"

                />

                <TouchableOpacity
                style={{
                    backgroundColor: '#841584',
                    width: 300,
                    height: 40,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                }}
                >
                    <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                    >
                        Crear Oración
                    </Text>
                </TouchableOpacity>



                
                <TouchableOpacity
                onPress={limpiarOracion}
                style={{
                    backgroundColor: '#0077B6',
                    width: 300,
                    height: 40,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                }}
                >
                    <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                    >
                        Orar De nuevo
                    </Text>
                </TouchableOpacity>
            
            </View>

        </View>
    );
    
}

export default CrearOrc;    