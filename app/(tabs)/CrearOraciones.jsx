import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";
//import { creatOrc } from "../logica/index.js";

// templatte strings --  c`string text`

import MisOraciones from "./MisOraciones.jsx";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import {
  getOracionDifuntos,
  getOracionEnfermos,
  getOracionAgradecimiento,
  getOracionFamilia,
} from "../data/oraciones.js";





import AsyncStorage from "@react-native-async-storage/async-storage";

import { savePrayer } from "../almacenarOracion.js";
//import {InterAd} from "../InterAd.jsx";
import InlineAd from "../InlineAd.jsx";


import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3715029693544325/6561687967';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

function CrearOraciones() {
  const [loaded, setLoaded] = useState(false);

/*
  const [loaded, setLoaded] = useState(false);

  console.log("LOADED", loaded);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }
*/

  const [nombre, setNombre] = useState("");
  const [intencion, setIntencion] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [txtModal, setTxtModal] = useState("");
  const [txtBtn, setTxtBtn] = useState("Cerrar");
  const [oracion, setOracion] = useState([]);
  const [categoriasOrc, setCategoriasOrc] = useState(null); // ?
  const [fcBtnModal, setFcBtnModal] = useState(
    () => () => console.log("Modal cerrado por defecto")
  );

  const limpiarOracion = () => {
    setIntencion("");
    setNombre("");
  };

  const cerrarModal = () => {
    console.log("cerrar modal");
    setModalVisible(false);
  };

  const categorias = [
    { label: "Enfermedad", value: "enfermos" },
    { label: "Difuntos", value: "difuntos" },
    { label: "Familia", value: "familia" },
    { label: "Agradecimiento", value: "agradecimiento" },
  ];

  const plantillaOracion = (nombre, categoriasOrc) => {
    let getIndex = Math.floor(Math.random() * 11);
    console.log(getIndex);
    let oracionTxt = "";


    // se me ocurre , utilizar un switch para las categorias y un template string para la oracion

    switch (categoriasOrc) {
      case "enfermos":
        oracionTxt = getOracionEnfermos(getIndex, nombre);
        console.log("ORC DESDE MI JSON:", oracionTxt.oracion);
        savePrayer(nombre, categoriasOrc, oracionTxt.oracion);

        setTimeout(() => {  
          setModalVisible(true);
          setTxtModal("Oración generada correctamente");
          setTxtBtn("ir a mis oraciones");

          setFcBtnModal(() => () => {
            setModalVisible(false);
            //    router.push({'/MisOraciones', { oracion: oracion , nombre: nombre, categorias: categoriasOrc }});
            //  router.push({ pathname: "/MisOraciones", params: { oracion: oracionTxt.oracion , nombre: nombre, categorias: categoriasOrc } });
            interstitial.show();

            router.push("/MisOraciones");
          });
        }, 2000);

        break;
      case "difuntos":
        console.log("Categorias: ||", categoriasOrc);
        oracionTxt = getOracionDifuntos(getIndex, nombre);
        console.log("ORC DESDE MI JSON DIFUNTOS:", oracionTxt.oracion);
        savePrayer(nombre, categoriasOrc, oracionTxt.oracion);
      

        setTimeout(() => {  
          setModalVisible(true);
          setTxtModal("Oración generada correctamente");
          setTxtBtn("ir a mis oraciones");

          setFcBtnModal(() => () => {
            setModalVisible(false);
            //    router.push({'/MisOraciones', { oracion: oracion , nombre: nombre, categorias: categoriasOrc }});
            //  router.push({ pathname: "/MisOraciones", params: { oracion: oracionTxt.oracion , nombre: nombre, categorias: categoriasOrc } });
            showAd();
            router.push("/MisOraciones");
          });
        }, 2000);

        break;
      case "familia":
        console.log("Categorias: ||", categoriasOrc);
        oracionTxt = getOracionFamilia(getIndex, nombre);
        savePrayer(nombre, categoriasOrc, oracionTxt.oracion);

        setTimeout(() => {  
          setModalVisible(true);
          setTxtModal("Oración generada correctamente");
          setTxtBtn("ir a mis oraciones");

          setFcBtnModal(() => () => {
            setModalVisible(false);
            //    router.push({'/MisOraciones', { oracion: oracion , nombre: nombre, categorias: categoriasOrc }});
            //  router.push({ pathname: "/MisOraciones", params: { oracion: oracionTxt.oracion , nombre: nombre, categorias: categoriasOrc } });
            showAd();
            router.push("/MisOraciones");
          });
        }, 2000);
        break;
      case "agradecimiento":
        console.log("Categorias: ||", categoriasOrc);
        oracionTxt = getOracionAgradecimiento(getIndex, nombre);
        savePrayer(nombre, categoriasOrc, oracionTxt.oracion);

        setTimeout(() => {  
          setModalVisible(true);
          setTxtModal("Oración generada correctamente");
          setTxtBtn("ir a mis oraciones");

          setFcBtnModal(() => () => {
            setModalVisible(false);
            //    router.push({'/MisOraciones', { oracion: oracion , nombre: nombre, categorias: categoriasOrc }});
          router.push({ pathname: "/MisOraciones", params: { oracion: oracionTxt.oracion , nombre: nombre, categorias: categoriasOrc } });
            showAd();
            //router.push("/MisOraciones");
          });
        }, 2000); 


        break;
      default:
        console.log("Categorias: ||", categoriasOrc);
        oracionTxt = `Dios todopoderoso, te pido por ${nombre} que se encuentra ${categoriasOrc}.
          Que tu amor y tu misericordia lo acompañen en este momento de dificultad.
          Que tu luz ilumine su camino y que tu paz llene su corazón.
          Te lo pido en el nombre de Jesús, tu hijo amado. Amén.`;
        break;
    }

   // console.log("ESTADO INICIAL DE ORACION 2 ", oracion); // Ahora muestra el array con la nueva oración
  };

  // revisar la logica,
  const creatOrc = () => {
    if (nombre === "" || nombre == null) {
      setModalVisible(true);
      setTxtModal("Por favor ingresa un nombre e intención");
     // showAd();

    } else {
      plantillaOracion(nombre, categoriasOrc);
     
  //    console.log("Oracion: ", oracion); // index 0 -- vacio, despues de la primera oracion si se llena
    }
  };

  useEffect(() => {
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
      interstitial.load(); // Recarga el anuncio cuando se cierra
    });

    // Carga el anuncio inicialmente
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeError();
      unsubscribeClosed();
    };
  }, []);

  useEffect(() => {
    console.log('effect #1')
    //setFcBtnModal(() => cerrarModal);
  
      console.log('Oración existe:', oracion);
      // Si ya hay una oración, puedes ejecutar tu lógica
      setCategoriasOrc(categorias[0].value);
 
  }, []);

  // { label: 'Padre Nuestro', value: 'padre nuestro' },
// Initialize Google Mobile Ads SDK
const showAd = () => {
  if (loaded) {
    interstitial.show();
  } else {
    console.log('Interstitial ad is not loaded yet');
  }
};
  return (
    <View>

      <InlineAd />
     
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "100%",
          marginTop: 170,
        }}
      >
        <Text
          style={{
            marginBottom: 15,
            textDecorationStyle: "solid",
            textDecorationColor: "black",
            fontSize: 25,
            fontWeight: "400",
          }}
        >
          Nombre de tu ser querido:
        </Text>
        <TextInput
          onChangeText={(nombre) => setNombre(nombre)}
          value={nombre}
          style={{
            height: "auto",
            width: 300,
            minHeight: 40,
            borderBottomWidth: 1,
            borderBottomColor: "black",

            textAlign: "center",
          }}
          placeholder="Nombre"
        />
        <Text
          style={{
            marginBottom: 20,
            marginTop: 20,
            textDecorationStyle: "solid",
            textDecorationColor: "black",
            fontSize: 25,
            fontWeight: "400",
          }}
        >
          Elje el tipo de oración:
        </Text>
        <Picker
          selectedValue={categoriasOrc}
          onValueChange={(itemValue) => setCategoriasOrc(itemValue)}
          style={{
            marginTop: 0,
            width: "70%",
            height: "auto",
            borderWidth: 2, // Grosor del borde
            borderColor: "black", // Color del borde
            borderRadius: 10,
            backgroundColor: "white", // Color de fondo
          }}
        >
          {categorias.map((option) => (
            <Picker.Item
              label={option.label}
              value={option.value}
              key={option.value}
            />
          ))}
        </Picker>

        <View>
          <TouchableOpacity
            onPress={creatOrc}
            style={{
              backgroundColor: "#841584",
              width: 300,
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Crear Oración
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={limpiarOracion}
            style={{
              backgroundColor: "#0077B6",
              width: 300,
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Orar De nuevo
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
      //style={styles.containerModal}
      >
        <Modal
          //style={styles.modalInfo}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalInfoText}>
              <Text>{txtModal}</Text>
              <Button title={txtBtn} onPress={fcBtnModal}  />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CrearOraciones;

const styles = StyleSheet.create({
  // Estilo para centrar el contenido del modal
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Fondo semitransparente
  },
  modalInfoText: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 45,
    alignItems: "center",
    // Ajustes para asegurar que el contenido interno también esté centrado
    alignSelf: "center",
    margin: 20,
  },
});
