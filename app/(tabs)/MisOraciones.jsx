import React , {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, Button , StyleSheet, ScrollView, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { oracionCompleta } from "../logica/index.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getPrayers } from '../almacenarOracion.js'


/*

const MisOraciones = () => { 
    /// router.push('/MisOraciones', { oracion: oracion , nombre: nombre, categorias: categoriasOrc });
    const [misOraciones, setMisOraciones] = useState([]);
    const { oracion, nombre, categorias } = useLocalSearchParams();

    
    console.log('ORACIONES GUARDADAS DE MANEREA LOCAL, ' , getPrayers());

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
        router.push({ pathname: "/screens/OracionCompleta", params: { oracion: oracion, categorias: categorias } });

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
        height: 'auto',
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

  */


const MisOraciones = () => {
  const [prayers, setPrayers] = useState([]);

    console.log('ORACIONES GUARDADAS DE MANEREA LOCAL, ' , setPrayers);

  useEffect(() => {
    const fetchPrayers = async () => {
      const storedPrayers = await getPrayers();
      setPrayers(storedPrayers);
    };

    fetchPrayers();
  }, []);

  const getPrayers = async () => {
    try {
      const storedPrayers = await AsyncStorage.getItem('prayers');
      return storedPrayers ? JSON.parse(storedPrayers) : [];
    } catch (error) {
      console.error('Error obteniendo las oraciones:', error);
      return [];
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, 


     }}>
      <FlatList
      // eliminar la simulacion del scroll
        showsVerticalScrollIndicator={false}
        data={prayers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8, padding: 16, backgroundColor: 'white', borderRadius: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>NOMBRE: {item.name}</Text>
            <Text style={{ fontSize: 16 }}>SITUACION: {item.situation}</Text>
            <Text onPress={
                () => {
                 //   router.push('/screens/OracionCompleta', { oracion: item });
                    router.push( { pathname: "/screens/OracionCompleta", params: { oracion: item.prayer } });
                }
            } style={{ fontSize: 16 , color: 'blue' , fontWeight: 'bold' , opacity: 0.8}}>Ver Oracion Completa</Text>
            {
                /**
                 *  <Text style={{ fontSize: 16 }}>{item.prayer}</Text>
                 */
            }

          </View>
        )}
      />
    </View>
  );
};

export default MisOraciones;
