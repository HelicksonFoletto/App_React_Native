import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "../../assets/Css";
import Icon from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Historico({ navigation }) {
  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.cabecalhoList2}>
        <Text style={styles.text}>Suas Listas</Text>
      </View>

      <View style={styles.histSintomas}>
        <Text style={styles.histTexSintomas}>Seg, 26 de outubro</Text>
        <Text style={styles.descriptionHistSintomas}>
          Nenhum sintoma apresentado
        </Text>

        <Text style={styles.histTexSintomas}>Ter, 27 de outubro</Text>
        <Text style={styles.descriptionHistSintomas}>
          Nenhum sintoma apresentado
        </Text>

        <Text style={styles.histTexSintomas}>Qua, 28 de outubro</Text>
        <Text style={styles.descriptionHistSintomas}>
          Nenhum sintoma apresentado
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
