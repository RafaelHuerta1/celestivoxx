import React , {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, Button , StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { oracionCompleta } from "../logica/index.js";

const MisOraciones = () => { 
    /// router.push('/MisOraciones', { oracion: oracion , nombre: nombre, categorias: categoriasOrc });
    const [misOraciones, setMisOraciones] = useState([]);

   
   // almacenar de manera local misOraciones, 


    const { oracion, nombre, categorias } = useLocalSearchParams();

    
   // console.log('ORACION COMPLETA 1', JSON.stringify(oracion.oracionC)); // oracionC}
    console.log('ORACION COMPLETA 2', oracion);


    //console.dir(oracion.oracion);
    console.log('NOMBRE: PAG MIS ORACIONNES',nombre);
    console.log('CATEGORIAS: PAG MIS ORACIONNES',categorias);

    useEffect(() => {
        console.log('Mis Oraciones useEffect');
     setMisOraciones([...misOraciones, {nombre: nombre, oracion: oracion, categorias: categorias}]);
        //console.log('Mis Oraciones useEffect', misOraciones.oracion);
        console.log('Mis Oraciones useEffect', misOraciones);
    }, [oracion, nombre, categorias]);

    console.log('Mis Oraciones', misOraciones);


    const openOracionCompleta = (oracion) => {
        console.log('ORACION COMPLETA ANTES', oracion);
        router.push('/screens/OracionCompleta', { oracion: oracion });
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
                                <Text style={styles.txtVerMas} onPress={openOracionCompleta}> Ver Oracion Completa </Text>
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