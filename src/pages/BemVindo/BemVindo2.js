import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../assets/Css";

export default function Bemvindo2({ navigation }) {
  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.ImagemBemvindo}>
        <Image source={require("../../assets/Imagens/bemvindo2.png")} />
      </View>
      <Text style={styles.TextTitle}>Juntos podemos mais!</Text>

      <View style={styles.buttonDicas}>
        <Text style={styles.TextCombate}>
          Mantenha seu dados atualizados para que juntos possamos criar um
          exército contra o mosquito e possamos evitar cada vez mais esse mal.
        </Text>

        <TouchableOpacity
          style={styles.proxScreen}
          onPress={() => navigation.navigate("BemVindo3")}
        >
          <Icon name="arrow-circle-right" size={50} color={"#007D46"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
