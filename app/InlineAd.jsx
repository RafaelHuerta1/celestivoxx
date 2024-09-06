// InlineAd.tsx

import { View } from 'react-native';
import React, { useState } from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const androidAdmobBanner = "ca-app-pub-3715029693544325/3915876159";

const InlineAd = () => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  return (
    <View style={{ height: isAdLoaded ? 'auto' : 0 }}>
      <BannerAd
        // It is extremely important to use test IDs as you can be banned/restricted by Google AdMob for inappropriately using real ad banners during testing
        unitId={__DEV__ ? TestIds.BANNER : androidAdmobBanner}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true, 
          // You can change this setting depending on whether you want to use the permissions tracking we set up in the initializing
        }}
        onAdLoaded={() => {
          setIsAdLoaded(true);
        }}
      />
    </View >
  );
};

export default InlineAd;
// ca-app-pub-3715029693544325/3915876159