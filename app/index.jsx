import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image , ScrollView , StyleSheet} from 'react-native';
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
  <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={true}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        Crea oraciones personalizadas para tus seres queridos y comparte palabras de aliento en las redes sociales. 
        {'\n'}
        Nuestra aplicación te ayuda a conectarte con quienes más te importan a través de la fe y el amor. 
      </Text>
    </View>

    <Link href="/CrearOraciones" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Crear oración
        </Text>
      </TouchableOpacity>
    </Link>
  </ScrollView>
);
};

const styles = StyleSheet.create({
scrollViewContent: {
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 20,
},
textContainer: {
  width: 300,
  marginTop: 10,
  marginBottom: 30,
},
text: {
  fontSize: 30,
  textAlign: 'center',
  padding: 12,
  lineHeight: 44,
},
button: {
  backgroundColor: '#03045E',
  width: 300,
  alignSelf: 'center',
  borderRadius: 10,
  marginTop: 0,
},
buttonText: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 15,
},
});

export default App;

