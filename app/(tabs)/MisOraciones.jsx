import React , {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, Button , StyleSheet, ScrollView, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { oracionCompleta } from "../logica/index.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getPrayers } from '../almacenarOracion.js'
//import { v4 as uuidv4 } from 'uuid'; // asegúrate de instalar esta librería con npm install uuid
import InlineAd from "../InlineAd.jsx";


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

    //'TODOS', 'ENFERMOS' , 'DIFUNTOS' , 'FAMILIA' , 'AGRADECIMIENTO'

    /*

    FUNCIONN VERSION 2

  const categoria = [
    
  //  {id : '1', title: 'TODOS'},
    {id : '1', title:'ENFERMOS'},
    {id : '2', title:'DIFUNTOS'},
    {id : '3', title:'FAMILIA'},
    {id : '4', title:'AGRADECIMIENTO'},

  ]

  */


  useEffect(() => {
    const fetchPrayers = async () => {
      const storedPrayers = await getPrayers();
      setPrayers(storedPrayers);
    };

    fetchPrayers();
  }, [prayers]);

  const getPrayers = async () => {
    try {
      const storedPrayers = await AsyncStorage.getItem('prayers');

     // UN OBJETO GUARDA LAS ORACIONES, BUSCAR POR INTENCION,
      // UNA INTENCION PUEDE TENER VARIAS ORACIONES

    //  console.log('ORACIONES GUARDADAS DE MANEREA LOCAL, ' , storedPrayers);
    



      return storedPrayers ? JSON.parse(storedPrayers) : [];
    } catch (error) {
      console.error('Error obteniendo las oraciones:', error);
      return [];
    }
  };
// situation, buscar por situacion

const getPrayersBySituation = async (situation) => {
   try {
      const storedPrayers = await AsyncStorage.getItem('prayers');
      const prayers = storedPrayers ? JSON.parse(storedPrayers) : [];
     // console.log('orc local situacion', prayers);
      return prayers.filter(prayer => prayer.situation === situation);
    }
    catch (error) {
      console.error('Error obteniendo las oraciones:', error);
      return [];
    }
}

// Función para eliminar una oración
const deletePrayer = async (prayerId) => {
  try {
    const storedPrayers = await AsyncStorage.getItem('prayers');
    let prayers = storedPrayers ? JSON.parse(storedPrayers) : [];
    
    // Filtra las oraciones para eliminar la que coincida con el ID
    prayers = prayers.filter(prayer => prayer.id !== prayerId);

    // Guarda la nueva lista de oraciones
    await AsyncStorage.setItem('prayers', JSON.stringify(prayers));
  } catch (error) {
    console.error('Error eliminando la oración:', error);
  }
};

  const renderrItem = ( {item} ) => {
  //console.log(item.title);
      return(
           <View
            style={{  borderRadius: 12, margin: 15, padding: 10,
              backgroundColor: 'white'

              }}
              onpress={ getPrayersBySituation(item.title) }
           >
              <Text
               style={{fontSize: 22, fontWeight: 'bold', color: 'grey' }}
              > {item.title} </Text>
           </View>
      )

  }

  /**  TENEMOS LA UI, PARA LA PROX VERSION PARA FILTRAR
   * 
   *     <View
        onpress={() => {
            console.log('CATEGORIA SELECCIONADA');
            

        }}
        style={{
        }}
        >
        <FlatList
      // eliminar la simulacion del scroll
      showsVerticalScrollIndicator={false}

       horizontal={true} // horizontal
       // eliminar el scroll animacion
       

       data={categoria}
      keyExtractor={item => item.id}
       
      /*renderItem={({ item }) => (
       
          <View style={{ flex: 1, flexDirection: 'row'  }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black' }}>CATEGORIA: {item.title}</Text>
        </View>
  
        )}
      
        renderItem={renderrItem}
        />
          </View>
   */

  return (
    
    <View
     style={{
        width: '100%',
        height: '100%',
       // marginBottom: 20,
     }}
    >
          <InlineAd />
          
            <ScrollView style={{ flex: 1, backgroundColor: '#f2f0f0', padding: 16,   }}>
      {prayers.map((item, index) => (
        <View key={index} style={{ marginVertical: 14, padding: 10, backgroundColor: 'white', borderRadius: 8, marginTop:22}}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text
              style={{ fontSize: 30, color: 'red', fontWeight: 'bold' }}
              onPress={() => deletePrayer(item.id)}
            >
              X
            </Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 10 }}>NOMBRE: {item.name}</Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>SITUACION: {item.situation}</Text>
          <Text
            onPress={() => router.push({ pathname: "/screens/OracionCompleta", params: { oracion: item.prayer } })}
            style={{ fontSize: 16, color: 'blue', fontWeight: 'bold', opacity: 0.8, marginTop: 10, cursor: 'pointer' }}
          >
            Ver Oracion Completa
          </Text>
        </View>
      ))}
            </ScrollView>
    </View>

  );
};

export default MisOraciones;
