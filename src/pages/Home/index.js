import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../assets/Css";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.cabecalho}>
        <Text style={styles.text}>Olá, Iguaçuense </Text>
        <Icon name="user-secret" size={50} color="black" />
      </View>

      <View style={styles.quadrados}>
        <View style={styles.quadrado3}>
          <Text style={styles.titletempo}>29º</Text>
          <Icon name="sun-o" size={30} color="yellow" />
          <Text style={styles.description}>
            Foz do Iguaçu, Paraná sáb, 21 de novembro
          </Text>
        </View>

        <View style={styles.quadrado1}>
          <Text style={styles.title}>Hidrate-se</Text>
          <Text style={styles.description}>
            O clima está seco. Manter-se hidratado é fundamental para o bom
            funcionamentodo seu organismo
          </Text>
        </View>
        <View style={styles.quadrado2}>
          <Text style={styles.title}>Use Máscara</Text>
          <Text style={styles.description}>
            A máscara protege você e quem está próximo, do novo Coronavírus.
          </Text>
        </View>
      </View>

      <View style={styles.hist}>
        <Text style={styles.histText}>Nenhum caso suspeito em sua região</Text>
        <Text style={styles.descriptionHist}>
          Mantenha seu estado de saúde atualizado.
        </Text>
        <Text style={styles.histText}>Seu estado de saúde é BOM!</Text>
        <Text style={styles.descriptionHist}>
          Pratique atividades fisicas e mantenha uma boa alimentação.
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
