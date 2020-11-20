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

export default function DicasCuidado({ navigation }) {
  const dados = [
    {
      key:
        "A OMS recomenda que os países considerem a introdução da vacina contra dengue apenas em zonas geográficas onde os dados epidemiológicos indicam um alto índice da doença. Outras vacinas com diferentes tipos do vírus se encontram em período de desenvolvimento. De modo geral as    vacinas têm mostrado uma efetividade muito variável (entre 50% e 80%) dependendo do tipo de vírus que causa a infeção, do tipo de indivíduos vacinados e do local onde tem sido implementada; igualmente o tempo de duração da proteção está sendo estudado.\n\n Atualmente, a principal forma de prevenção é o combate aos mosquitos – eliminando os criadouros de forma coletiva com participação comunitária – e o estímulo à estruturação de políticas públicas efetivas para o saneamento básico e o uso racional de inseticidas.",
    },
  ];

  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.cabecalhoList}>
        <Text style={styles.text}>Cuidados e prevenções</Text>
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
