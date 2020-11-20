import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../../assets/Css";

export default function Configuracao({ navigation }) {
  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.cabecalhoConfig}>
        <Text style={styles.text}>Configurações</Text>
      </View>

      <View style={styles.buttonDicas}>
        <View style={styles.inf}>
          <Icon name="user-secret" size={50} color="black" />
          <Text style={styles.titleSair}> User </Text>
          <Text style={styles.titleDescription}> user@gmail.com </Text>
          <TouchableOpacity
            style={styles.buttonSair}
            onPress={() => navigation.navigate("Login")}
          >
            <MaterialCommunityIcons name="logout" size={40} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.notificacao}>
          <Text style={styles.titleNotificacao}>Notificações</Text>
          <Text style={styles.descriptionNotificacao}>
            Receber notificações importantes
          </Text>
          <TouchableOpacity style={styles.buttonNotificacao}>
            <Icon name="toggle-on" size={35} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.modoEscuro}>
          <Text style={styles.titleNotificacao}>Modo Escuro</Text>
          <Text style={styles.descriptionModo}>
            Troca as cores para tons escuros e predominantemente preto
          </Text>
          <TouchableOpacity style={styles.buttonModoEscuro}>
            <Icon name="toggle-on" size={35} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.SobreApp}>
          <Text style={styles.titleNotificacao}>Sobre o App</Text>
          <TouchableOpacity style={styles.buttonApp}>
            <Text style={styles.descriptionApp}>
              Algumas informações sobre o aplicativo
            </Text>
          </TouchableOpacity>
        </View>
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
