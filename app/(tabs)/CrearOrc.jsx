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


const CrearOrc = () => {
  const [nombre, setNombre] = useState("");
  const [intencion, setIntencion] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [txtModal, setTxtModal] = useState("");

  const limpiarOracion = () => {
    setIntencion("");
    setNombre("");
  };

  const creatOrc = () => {
    if (nombre === "" || intencion === "") {
      setModalVisible(true);
      setTxtModal("Por favor ingresa un nombre e intención");
    }
    else{
      setModalVisible(true);
      setTxtModal("Estamos creando tu oración ;)"); 
      
      // hacer la llamada a la api de gpt-3
       
    }
  };

  const cerrarModal = () => {
    console.log("cerrar modal");
    setModalVisible(false);
  };

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
        <TextInput
          onChangeText={(nombre) => setNombre(nombre)}
          value={nombre}
          style={{
            height: "auto",
            width: 300,
            minHeight: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            textAlign: "center",
          }}
          placeholder="Nombre"
        />

        <TextInput
          onChangeText={(intencion) => setIntencion(intencion)}
          value={intencion}
          style={{
            height: "auto",
            width: 300,
            minHeight: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            textAlign: "center",
            marginTop: 10,
          }}
          placeholder="Intención"
        />

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
            <Button title='Cerrar' onPress={cerrarModal} />
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