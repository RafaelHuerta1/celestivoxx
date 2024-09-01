import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { Button } from 'react-native';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3715029693544325~1748215103';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

const InterAd = forwardRef((props, ref) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  useImperativeHandle(ref, () => ({
    showAd: () => {
      if (loaded) {
        interstitial.show();
      }
    },
  }));

  return null; // No need to render anything
});

export default InterAd;