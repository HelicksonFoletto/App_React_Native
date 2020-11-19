import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../../assets/Css";

export default function Bemvindo1({ navigation }) {
  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.ImagemBemvindo}>
        <Image source={require("../../assets/Imagens/bemvindo1.png")} />
      </View>
      <Text style={styles.TextTitle}>Bem-vindo!</Text>

      <View style={styles.buttonDicas}>
        <Text style={styles.TextCombate}>
          Ajude-nos a vencer a batalha contra o mosquito Aedes aegypti sem sair
          de casa.
        </Text>

        <TouchableOpacity
          style={styles.proxScreen}
          onPress={() => navigation.navigate("BemVindo2")}
        >
          <Icon name="arrow-circle-right" size={50} color={"#007D46"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
