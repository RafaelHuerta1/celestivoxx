import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

function OracionCompleta() {


  const { oracion, categorias } = useLocalSearchParams();




  console.log('ORACION COMPLETA en screen', oracion);
  console.log('CATEGORIAS en screen ||', categorias);

  return (

    <>
       <ScrollView  showsVerticalScrollIndicator={false}>
    <View
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      height: "auto",
    }}
  >

    <View>
      <Text style={{ fontSize: 30, textAlign: "center", margin: 20, fontWeight: 'bold' }}>
        Oración Completa
      </Text>
    </View>
    

      {
        oracion === undefined ? <Text>Aun no tienes oracion</Text> :
        <Text style={styles.txtMainOrcCompleta}>
          {'\n'}
          {oracion}
        </Text>
      }


    <TouchableOpacity
      //onPress={creatOrc}
      style={{
        backgroundColor: "#841584",
        width: 300,
        height: 50,
        borderRadius: 10,
        margin: 20,
        justifyContent: "center",
      }}
    >
      {/* Your button content here */}

      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 20,
          marginTop: 5,
        }}
      >
        Compartir Oracion
      </Text>


    </TouchableOpacity>
     </View>
  </ScrollView> 
    </>

   
  );
}

const styles = StyleSheet.create({
  txtMainOrcCompleta:{
   fontSize: 25,
   textAlign: 'center',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
    borderWidth: 1,
    borderTopLeftRadius: 20,
  }
});

export default OracionCompleta;