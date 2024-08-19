import React , {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, Button , StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { oracionCompleta } from "../logica/index.js";

const MisOraciones = () => { 
    /// router.push('/MisOraciones', { oracion: oracion , nombre: nombre, categorias: categoriasOrc });
    const [misOraciones, setMisOraciones] = useState([]);
    const { oracion, nombre, categorias } = useLocalSearchParams();

    
   // console.log('ORACION COMPLETA 1', JSON.stringify(oracion.oracionC)); // oracionC}
   useEffect(() => {
    if (oracion && nombre && categorias) {
        console.log('Mis Oraciones useEffect');
        setMisOraciones(prevOraciones => [
            ...prevOraciones,
            { nombre: nombre, oracion: oracion, categorias: categorias }
        ]);
        console.log('Mis Oraciones useEffect', misOraciones);
    }
}, [oracion, nombre, categorias]);

console.log('NOMBRE: PAG MIS ORACIONNES', nombre);
console.log('ORACION: PAG MIS ORACIONNES', oracion);
console.log('CATEGORIAS: PAG MIS ORACIONNES', categorias);

if (!oracion || !nombre || !categorias) {
    console.log('No hay oracion');
    return <Text> No hay oracion </Text>;
}

    const openOracionCompleta = (oracion) => {
        console.log('ORACION COMPLETA ANTES', oracion); // si llega
       // router.push('/screens/OracionCompleta', { oracion: misOraciones  }) // Undefined;
        router.push({ pathname: "/screens/OracionCompleta", params: { oracion: oracion } });

    }

    // add un scrollview
    const createCard = (oracion, index) => {
        return (



                <View
                    style={styles.containerMainCard}
                    key={index}
                >
                           
                            <Text style={styles.txtStyle}> NOMBRE: {oracion.nombre} </Text>
                            <Text style={styles.txtParrafo1}> CATEGORIA: {oracion.categorias} </Text>

                            <View>
                                <Text style={styles.txtVerMas} onPress={() => openOracionCompleta(oracion.oracion)}>Ver Oracion Completa</Text>
                            </View>
                    
                </View>

        );
      };
      


        return (
            <ScrollView>

            <View
             style={{
                justifyContent : "center",
                alignItems: "center",
                alignContent: "center",
                }}
            >

                {
                    misOraciones.length === 0 ? <Text> No hay oraciones </Text> :
                    misOraciones.map((oracion, index) => {
                        return createCard(oracion, index);
                    
                }
                )}

            </View>
            </ScrollView>
        );  

    

}

export default MisOraciones;    

const styles = StyleSheet.create({
    containerMainCard: {
        backgroundColor: 'white',
        width: '80%',
        height: 120,
        borderRadius: 20,
        margin: 10,
        padding: 13,

    },
    txtStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'start',
        fontSize: 20,
    },
    txtParrafo1: {
        color: 'black',
        fontWeight: '400',
        textAlign: 'start',
        marginTop: 10,
    },
    txtVerMas: {
        color: 'blue',
        fontWeight: '500',
        textAlign: 'start',
        marginTop: 10,
    },
  });