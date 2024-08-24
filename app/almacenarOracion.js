import AsyncStorage from '@react-native-async-storage/async-storage';

// Función para guardar una oración localmente
export const savePrayer = async (name, situation, prayer) => {
  try {
    const storedPrayers = await AsyncStorage.getItem('prayers');
    const prayers = storedPrayers ? JSON.parse(storedPrayers) : [];

    const newPrayer = {
      name,
      situation,
      prayer,
      createdAt: new Date().toISOString(),
    };

    prayers.push(newPrayer);

    await AsyncStorage.setItem('prayers', JSON.stringify(prayers));
  } catch (error) {
    console.error('Error guardando la oración:', error);
  }
};

// Función para obtener todas las oraciones
export   const getPrayers = async () => {
  try {
    const storedPrayers = await AsyncStorage.getItem('prayers');
    console.log(storedPrayers);
    return storedPrayers ? JSON.parse(storedPrayers) : [];
  } catch (error) {
    console.error('Error obteniendo las oraciones:', error);
    return [];
  }
};


// Ejemplo de uso:
//savePrayer('Jane Doe', 'Oración de agradecimiento', 'Gracias por todas tus bendiciones.');
