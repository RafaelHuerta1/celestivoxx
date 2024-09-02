import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3715029693544325~1748215103';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

const InterAd = forwardRef((props, ref) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadAd = () => {
      interstitial.load();
    };

    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      loadAd(); // Reload the ad after it has been closed
    });

    // Start loading the interstitial straight away
    loadAd();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
    };
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