
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import mobileAds, { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const InlineAd = () => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    // Initialize Google Mobile Ads SDK
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        // Initialization complete
        console.log('Google Mobile Ads SDK initialized');
      });
  }, []);

  return (
    <View style={{ height: isAdLoaded ? 'auto' : 0 }}>
      <BannerAd
        // It is extremely important to use test IDs as you can be banned/restricted by Google AdMob for inappropriately using real ad banners during testing
        unitId={__DEV__ ? TestIds.BANNER : 'ca-app-pub-3715029693544325/3915876159'} // Reemplaza esto con tu ID de anuncio real
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Ad loaded');
          setIsAdLoaded(true);
        }}
        onAdFailedToLoad={(error) => {
          console.error('Ad failed to load: ', error);
        }}
      />
    </View>
  );
};

export default InlineAd;
