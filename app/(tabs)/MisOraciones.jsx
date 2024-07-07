import React , {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, Button , StyleSheet} from "react-native";
import { useLocalSearchParams } from "expo-router";


const MisOraciones = () => { 

    const [misOraciones , setMisOraciones] = useState([]);
    const { nombre , oracion, categorias} = useLocalSearchParams();
    console.log('NOMBRE:',nombre);
    console.log('ORACION:',oracion);
    console.log('CATEGORIAS:',categorias);


    if(nombre && oracion && categorias){
        setMisOraciones([
            ...misOraciones,
            {
                nombre,
                oracion,
                categorias,
            },
        ]);

        console.log('Mis Oraciones:', misOraciones);
    }
 
    



        return (
            <View
             style={{
                justifyContent : "center",
                alignItems: "center",
                alignContent: "center",
                }}
            >

                
                {
                    misOraciones.map((oracion, index) => {
                        return (
                            <View
                                key={index}
                                style={styles.containerMain}
                            >
                                <Text style={styles.txtStyle}> {oracion.nombre} </Text>
                                <Text style={styles.txtParrafo}> {oracion.oracion} </Text>
                                <Text style={styles.txtParrafo1}> {oracion.categorias} </Text>
                            </View>
                        );
                     
                    })
                }

            </View>
        );  

    

}

export default MisOraciones;    

const styles = StyleSheet.create({
    containerMain: {
        backgroundColor: '#0077B6',
        width: '80%',
        height: 150,
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    txtParrafo: {
        color: 'white',
        fontSize: 15,
    },
    txtParrafo1: {
        color: 'white',
        fontSize: 15,
    },
  });