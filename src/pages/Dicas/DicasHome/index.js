import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../../assets/Css";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function DicasHome({ navigation }) {
  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.cabecalhoList}>
        <Text style={styles.text}>Dicas e Prevenções</Text>
      </View>

      <View style={styles.buttonDicas}>
        <TouchableOpacity
          style={styles.DicasButton1}
          onPress={() => navigation.navigate("DicasCombate")}
        >
          <Text style={styles.TitleDicas}>Combate ao Mosquito</Text>
          <Text style={styles.descriptionDicas}>
            Descubra maneiras eficázes de combate ao mosquito da dengue.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DicasButton2}
          onPress={() => navigation.navigate("DicasCriadouros")}
        >
          <Text style={styles.TitleDicas}>Criadouro</Text>
          <Text style={styles.descriptionDicas}>
            Como encontrar, evitar e eliminar os criadouros do mosquito da
            dengue.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DicasButton3}
          onPress={() => navigation.navigate("DicasCuidado")}
        >
          <Text style={styles.TitleDicas}>Cuidados</Text>
          <Text style={styles.descriptionDicas}>
            Previna-se contra o mosquito. Cuide bem da sua familia. .
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DicasButton4}
          onPress={() => navigation.navigate("DicasContrai")}
        >
          <Text style={styles.TitleDicas}>Contrai a dengue, e agora?</Text>
          <Text style={styles.descriptionDicas}>
            Descubra como agir após ser infectado e aos possiveis sintomas.
          </Text>
        </TouchableOpacity>
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
