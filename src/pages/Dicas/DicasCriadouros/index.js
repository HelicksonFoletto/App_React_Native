import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../../assets/Css";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

export default function DicasCriadouros({ navigation }) {
  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.cabecalhoList}>
        <Text style={styles.text}>Combate ao Mosquito</Text>
      </View>

      <View style={styles.buttonDicas}>
        <Text style={styles.TextCombate}>
          O vetor da transmissão do vírus da dengue é o mosquito Aedes Aegypti.
          Para se proliferar, é necessário que haja água parada, não
          necessariamente potável, em recipientes como latas, garrafas vazias,
          pneus e calhas.
        </Text>
      </View>

      <View style={styles.barra}></View>

      <View style={styles.icon_menu}>
        <TouchableOpacity style={styles.itemMenuHome}>
          <Entypo
            name="home"
            size={40}
            color="black"
            onPress={() => navigation.navigate("Home")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemMenuList}
          onPress={() => navigation.navigate("Historico")}
        >
          <Icon name="list" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemMenuMais}
          onPress={() => navigation.navigate("ListHome")}
        >
          <Ionicons name="ios-add" size={70} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemMenuDica}
          onPress={() => navigation.navigate("DicasHome")}
        >
          <AntDesign name="bulb1" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemMenuConfig}
          onPress={() => navigation.navigate("Config")}
        >
          <AntDesign name="setting" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
