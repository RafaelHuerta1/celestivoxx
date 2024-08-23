import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

function OracionCompleta() {


  const { oracion, categorias } = useLocalSearchParams();




  console.log('ORACION COMPLETA en screen', oracion);
  console.log('CATEGORIAS en screen ||', categorias);

  return (
    <View
     style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
    }}
    >
      

      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 30,
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          textAlign: "center",
        }}
      
      >
          Oracion por la siguiente intencion: {categorias ? categorias.toUpperCase() : ''}
      </Text>

      {
        oracion === undefined ? <Text>Aun no tienes oracion</Text>:
        <Text style={styles.txtMainOrcCompleta}>
        {'\n\n'}
        {oracion}
      </Text>

      }



<TouchableOpacity
          //onPress={creatOrc}
          style={{
            backgroundColor: "#4CAF50", // verde bajito #4CAF50
            width: 300,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 120,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Compartir Oracion
          </Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  txtMainOrcCompleta:{
      fontSize: 22,
      fontWeight: '400',
      width: '100%',
      padding: 30, 
      textAlign: 'center',
      marginTop: 0,
      
  }
});

export default OracionCompleta;