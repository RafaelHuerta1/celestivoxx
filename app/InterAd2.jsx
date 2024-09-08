import { useEffect, useState } from 'react';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3715029693544325/5823271037'; // Reemplaza con tu ID real

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'], // Agrega tus palabras clave relevantes aquí
});

export const InterAd2 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadAd = () => {
      interstitial.load();
    };

    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      console.log('Interstitial ad loaded');
      setLoaded(true);
    });

    const unsubscribeError = interstitial.addAdEventListener(AdEventType.ERROR, (error) => {
      console.error('Interstitial ad failed to load: ', error);
      setLoaded(false);
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      console.log('Interstitial ad closed');
      setLoaded(false); // Establece loaded a false hasta que el nuevo anuncio esté cargado
      loadAd(); // Recarga el anuncio cuando se cierra
    });

    // Carga el anuncio inicialmente
    loadAd();

    return () => {
      unsubscribeLoaded();
      unsubscribeError();
      unsubscribeClosed();
    };
  }, []);

  const showAd = () => {
    if (loaded) {
      interstitial.show();
      
    } else {
      console.log('Interstitial ad is not loaded yet');
    }
  };

  return { showAd, loaded };
};