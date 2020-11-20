import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../../assets/Css";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

export default function DicasContrai({ navigation }) {
  const dados = [
    {
      key:
        "Fique atento aos sintomas. Os principais são:\n * Dor abdominal severa;\n * Dificuldade em respirar ou sangramento no nariz;\n * Vômito ou diarreia.",
    },
    {
      key:
        "Se esses sinais persistirem, procure um pronto-socorro imediatamente e explique ao médico o que está sentindo. Aproveite e tire todas as suas dúvidas",
    },
    {
      key:
        "Especialistas que podem diagnosticar são:\n * Clínico geral\n * Infectologista.\n",
    },
  ];

  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.cabecalhoList}>
        <Text style={styles.text}>Contra a dengue, e agora?</Text>
      </View>

      <View style={styles.buttonDicas}>
        <FlatList
          style={styles.buttonDicas}
          data={dados}
          renderItem={({ item }) => (
            <Text style={styles.TextCombate}>{item.key}</Text>
          )}
        />
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
