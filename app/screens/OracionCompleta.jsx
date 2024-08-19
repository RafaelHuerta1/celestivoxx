import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

function OracionCompleta() {


  const { oracion } = useLocalSearchParams();




  console.log('ORACION COMPLETA en screen', oracion);

  return (
    <View
     style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
    }}
    >
      
      {
        oracion === undefined ? <Text>Aun no tienes oracion</Text>:
        <Text style={styles.txtMainOrcCompleta} >Oracion Completa:
          {'\n'} 
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
      padding: 22, 
      textAlign: 'center',
      marginTop: 70,
  }
});

export default OracionCompleta;