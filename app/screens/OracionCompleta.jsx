import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, ScrollView, Share} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

function OracionCompleta() {


  const { oracion } = useLocalSearchParams();




  console.log('ORACION COMPLETA en screen', oracion);



  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          oracion,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };




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


      <View
       style={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"

      }}
      >
          <TouchableOpacity
          onPress={onShare}
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
        
        <TouchableOpacity
          onPress={
            () => {
              console.log('Regresar a mis oraciones');
              router.push('MisOraciones');
            }
          }
          style={{
            backgroundColor: "#0077B6", // color azul del boton anterior #841584
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
            Regresar a mis oraciones
          </Text>


        </TouchableOpacity>

  
      </View>
            {/** agregare verison 2, reproducion de voz */}

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
    borderWidth: 2,
    borderRadius: 20,
  }
});

export default OracionCompleta;