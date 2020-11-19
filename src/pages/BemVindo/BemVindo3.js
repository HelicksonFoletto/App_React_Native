import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../assets/Css";

export default function Bemvindo3({ navigation }) {
  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.ImagemBemvindo}>
        <Image source={require("../../assets/Imagens/bemvindo3.png")} />
      </View>
      <Text style={styles.TextTitle}>Precisamos de você!</Text>

      <View style={styles.buttonDicas}>
        <Text style={styles.TextCombate}>
          Sem você não podemos ir muito longe, nem podemos fazer muito.
          Ajude-nos a ajudar toda a comunidade fazendo a sua parte! Reserve 2
          minutinhos do seu dia para nos contar como você está.
        </Text>

        <TouchableOpacity
          style={styles.proxScreen}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Icon name="arrow-circle-right" size={50} color={"#007D46"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
