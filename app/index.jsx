import React, {useEffect}   from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import { Link } from 'expo-router';
import mobileAds from 'react-native-google-mobile-ads';



import 'expo-dev-client';

const App = () => {


  // Initialize Google Mobile Ads SDK
useEffect(() => {
  mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });
}, []);

  return (
    <View

    
    >
        <Text
        style={{
            fontSize: 25,
            fontWeight: 'regular',
            textAlign: 'center',
            marginTop: 30,
            width: '90%', 
            marginLeft: '5%',
            marginRight: '5%',
            textAlign: 'center',
        }}
        > 
      Crea una oración personalizada para tus seres queridos y compártela con amor en tus redes sociales.


        </Text>


        <View
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:70,
        }}

        >
        <Image
          source={{
            uri: 'https://tse1.mm.bing.net/th?id=OIG1.klRAzzhOloAPoXegTbxF&pid=ImgGn', // tarda mucho en redenrizar,,
          }}
          style={{width: '80%', height: 400, borderRadius: 50}}
        />
        </View>



        <View
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 120,
        }}
        
        >

        <Link href="/CrearOrc" asChild>
        
        <TouchableOpacity
        style={{
            backgroundColor: '#03045E',
            width: '50%',
            marginLeft: '5%',
            marginRight: '5%',
            borderRadius: 20,
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


    </View>



  );
};

export default App;