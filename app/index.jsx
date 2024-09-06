import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import mobileAds from 'react-native-google-mobile-ads';

const App = () => {
  // Initialize Google Mobile Ads SDK
 // Initialize Google Mobile Ads SDK
useEffect(() => {
  (async () => {
    // Google AdMob will show any messages here that you just set up on the AdMob Privacy & Messaging page
    const { status: trackingStatus } = await requestTrackingPermissionsAsync();
    if (trackingStatus !== 'granted') {
      // Do something here such as turn off Sentry tracking, store in context/redux to allow for personalized ads, etc.
    }

    // Initialize the ads
    await mobileAds().initialize();
  })();
}, [])
  return (
    <View>
      <Link href="/CrearOraciones" asChild>
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
  );
};

export default App;

