import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import mobileAds from 'react-native-google-mobile-ads';
//import registerNNPushToken from 'native-notify';

/*
import registerNNPushToken from 'native-notify';
registerNNPushToken(23398, 'ksPLa8j5tEzbc9RbIoOCFV');


*/  

const App = () => {

  //registerNNPushToken(23398, 'ksPLa8j5tEzbc9RbIoOCFV');

 // Initialize Google Mobile Ads SDK
 useEffect(() => {
  mobileAds()
    .initialize()
    .then(adapterStatuses => {
      // Initialization complete!
      
    });


}, []);


  return (
    <View>

      <View
        style={{margin:33}}
      >
         <Text
         style={{fontSize: 30, textAlign: 'center', padding:12 , lineHeight:44}}
         
         >
         Crea oraciones personalizadas para tus seres queridos y comparte palabras de aliento en las redes sociales. 
          {'\n'}
         Nuestra aplicación te ayuda a conectarte con quienes más te importan a través de la fe y el amor. 
         </Text>

          <View>
          </View>

      </View>


      <Link href="/CrearOraciones" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: '#03045E',
             width: 300,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 15,
      
            }}
          >
            Crear oración
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default App;

