import React , {useState} from "react";
import { View, Text, Image, TouchableOpacity, Button , StyleSheet} from "react-native";
import { useLocalSearchParams } from "expo-router";


const MisOraciones = () => { 

    const [misOraciones , setMisOraciones] = useState([]);
    const { nombre, oracion  } = useLocalSearchParams();
    console.log(nombre, oracion);


 
     const createCard = () => {
        <View style={styles.containerMain}>
                    <Text style={styles.txtStyle}> ESTA ORACION ES PARA: {nombre} </Text>
                    <Text style={styles.txtParrafo}> Pedimos por su situacion : {intencion} </Text>
                    <View
                    style={{
                            marginVertical: 10,
                        flexDirection: "row",
                    }}
                    >
                    <Text style={styles.txtParrafo} > Ver Oracion</Text>
                    <Text style={styles.txtParrafo1} >Crear Reto</Text>
                    </View>
        </View>
     }
    
        return (
            <View
             style={{
                justifyContent : "center",
                alignItems: "center",
                alignContent: "center",
                }}
            >

            <Text style={styles.txtStyle}> Mis Oraciones </Text>
            {
                misOraciones.map((oracion) => {
                    return createCard(oracion.nombre, oracion.intencion);
                })
            }
            
            </View>
        );  

    

}

export default MisOraciones;    

const styles = StyleSheet.create({
    containerMain: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 13,
        marginTop: 22,
        borderBlockColor: "black",
        borderBlockWidth: 1,
        backgroundColor: "white",
        width: 400,
        
    },
    txtStyle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 5,
    },
    txtParrafo: {
        color: "black",
        fontSize: 16,
        marginVertical:5,
    },
    txtParrafo1: {
        color: "black",
        fontSize: 16,
        marginVertical:5,
        marginHorizontal: 20,
    },
  });