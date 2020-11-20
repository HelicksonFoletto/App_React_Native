import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../../assets/Css";
import TaskList from "../../../components/TaskList";

export default function QuestionarioHome({ navigation }) {
  return (
    <View style={styles.ContainerCadastro}>
      <View style={styles.ContainerList}>
        <Text style={styles.TextTitleList}>Nova Lista</Text>
        <Text style={styles.descriptionList}>
          {" "}
          Faça sua autoavaliação. O que você está sentindo?
        </Text>

        <View style={styles.form_quest}>
          <TaskList />
          <Text style={styles.descriptionSintomas}> Cansoço Extremo</Text>

          <TaskList />
          <Text style={styles.descriptionSintomas}> Dor Abdominal</Text>

          <TaskList />
          <Text style={styles.descriptionSintomas}> Dor de cabeça</Text>
          <TaskList />
          <Text style={styles.descriptionSintomas}>Dor nos olhos</Text>
          <TaskList />
          <Text style={styles.descriptionSintomas}> Enjoo e vômito</Text>
          <TaskList />
          <Text style={styles.descriptionSintomas}> Febre Alta</Text>
          <TaskList />
          <Text style={styles.descriptionSintomas}> Mal-Estar</Text>

          <TaskList />
          <Text style={styles.descriptionSintomas}> Manchas na Pele</Text>

          <TaskList />
          <Text style={styles.descriptionSintomas}> Estou Bem!</Text>

          <TouchableOpacity
            style={styles.SaveButton}
            onPress={() => navigation.navigate("ListHome")}
          >
            <Text style={styles.cadastro_textButton}> Salvar </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.icon_menu_dicas}>
        <TouchableOpacity style={styles.itemMenuPhone}>
          <Icon
            name="mobile"
            size={50}
            color="black"
            onPress={() => navigation.navigate("ListTelefone")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenuMaps}>
          <Icon
            name="map"
            size={50}
            color="black"
            onPress={() => navigation.navigate("ListMaps")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenuQuest}>
          <Icon
            name="address-card"
            size={50}
            color="black"
            onPress={() => navigation.navigate("ListQuestIndic")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
