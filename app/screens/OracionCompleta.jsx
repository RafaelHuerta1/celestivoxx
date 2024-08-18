import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

function OracionCompleta() {


  const { oracion } = useLocalSearchParams();




  console.log('ORACION COMPLETA en screen', oracion);

  return (
    <View>
      
      {
        oracion === undefined ? <Text>Aun no tienes oracion</Text>:
        <Text style={styles.txtMainOrcCompleta} >Oracion Completa:
          
          {oracion}
        </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  txtMainOrcCompleta:{
      fontSize: 22,

  }
});

export default OracionCompleta;