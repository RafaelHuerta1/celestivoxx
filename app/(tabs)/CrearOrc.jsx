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

const CrearOrc = () => {






  const [nombre, setNombre] = useState("");
  const [intencion, setIntencion] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [txtModal, setTxtModal] = useState("");
  const [txtBtn, setTxtBtn] = useState("Cerrar");
  const [oracion, setOracion] = useState("");
  const [categoriasOrc, setCategoriasOrc] = useState();
  const [fcBtnModal, setFcBtnModal] = useState(() => () => console.log("Modal cerrado por defecto"));

  const limpiarOracion = () => {
    setIntencion("");
    setNombre("");
  };
  /*
  const plantillaOracion = (nombre, intencion) => {
    setOracion(
      `Esta oracion es para: ${nombre} \n Pedimos por su situacion: ${intencion}`
    );
  };
  */

  const creatOrc = () => {
    if (nombre === "" ) {
      setModalVisible(true);
      setTxtModal("Por favor ingresa un nombre e intención");
    } else {
      setModalVisible(true);
      setTxtModal("Estamos creando tu oración ;)");

      setTimeout(() => {
        setModalVisible(true);
        setTxtModal("Oracion Creada...");
        setTxtBtn("Ir a Mis Oraciones");
        setFcBtnModal(() => {
          console.log("navegar a mis oraciones");
          setModalVisible(false);
          setOracion(`Esta oracion es para: ${nombre} \n Pedimos por su situacion: ${intencion}`);
          router.push("MisOraciones", { nombre, oracion });
        });
        // plantillaOracion(nombre, intencion); 
        // navegar a mis oraciones con la props nombre , intecion y oracion
      }, 3000);
      // hacer la llamada a la api de gpt-3
    }
  };

  const cerrarModal = () => {
    
    console.log("cerrar modal");
    setModalVisible(false);
  };
/**
 *     "Enfermos": "Enfermos",
    "Difuntos": "Difuntos",
    "Familia": "Familia",
    "Agradecimiento": "Agradecimiento",
 */

    useEffect(() => {
      console.log(categoriasOrc);
      setFcBtnModal(() => cerrarModal);
    }, []);

  const categorias = [
    { label: "Enfermos", value: "enfermos" },
    { label: "Difuntos", value: "difuntos" },
    { label: "Familia", value: "familia" },
    { label: "Agradecimiento", value: "agradecimiento" },
  ];
   // { label: 'Padre Nuestro', value: 'padre nuestro' },
    


  return (
    <View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginTop: 15,
          marginRight: 25,
        }}
      >
        <Button
          title="Iniciar Sesión"
          color="#841584"
          onPress={() => alert("Iniciar Sesión")}
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
            margin: 20,
          }}
        >
          Ora de manera personalizada para tus seres queridos y comparte en tus
          redes sociales.
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <Text
          style={{
            marginBottom: 15,
            textDecorationStyle: "solid",
            textDecorationColor: "black",
            fontSize: 20,
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
                    fontSize: 20,
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
                  width: '70%',
                  height: 'auto',
                  borderWidth: 2, // Grosor del borde
                  borderColor: 'black', // Color del borde
                  borderRadius: 10,
                  backgroundColor: 'white', // Color de fondo
                }}
              >

                            {categorias.map((option) => (
                                <Picker.Item label={option.label} value={option.value} key={option.value} />
                            ))}
                        </Picker>

        <TouchableOpacity
          onPress={creatOrc}
          style={{
            backgroundColor: "#841584",
            width: 300,
            height: 40,
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
            height: 40,
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
            }}
          >
            Orar De nuevo
          </Text>
        </TouchableOpacity>
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
              <Button title={txtBtn} onPress={fcBtnModal} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CrearOrc;

const styles = StyleSheet.create({
  // Estilo para centrar el contenido del modal
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
