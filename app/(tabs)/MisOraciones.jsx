import React , {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, Button , StyleSheet} from "react-native";
import { useLocalSearchParams } from "expo-router";


const MisOraciones = () => { 
    /// router.push('/MisOraciones', { oracion: oracion , nombre: nombre, categorias: categoriasOrc });
    const [misOraciones, setMisOraciones] = useState([]);
    
    const {oracion, nombre, categorias} = useLocalSearchParams();
    console.log('ORACION: PAG MIS ORACIONNES',oracion);
    console.log('NOMBRE: PAG MIS ORACIONNES',nombre);
    console.log('CATEGORIAS: PAG MIS ORACIONNES',categorias);

    useEffect(() => {
        console.log('Mis Oraciones useEffect');
        setMisOraciones([...misOraciones, {nombre: nombre, oracion: oracion, categorias: categorias}]);
        console.log('Mis Oraciones useEffect', misOraciones);
    }, [oracion, nombre, categorias]);


    const createCard = (oracion, index) => {
        return (
          <View
            style={styles.containerMainCard}
            key={index}
          >
            <Text style={styles.txtStyle}> {oracion.nombre} </Text>
            <Text style={styles.txtParrafo1}> {oracion.categorias} </Text>
          </View>
        );
      };
      


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
                        return createCard(oracion, index);
                    
                }
                )}

            </View>
        );  

    

}

export default MisOraciones;    

const styles = StyleSheet.create({
    containerMainCard: {
        backgroundColor: '#f0f0f0',
        width: '80%',
        height: 200,
        borderRadius: 20,
        margin: 10,
        padding: 10,
    },
  });