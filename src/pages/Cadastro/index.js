import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../../services/Firebase";
import styles from "../../assets/Css";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const onChangeNome = (txtNome) => {
    setNome(txtNome);
  };
  const onChangeIdade = (txtIdade) => {
    setIdade(txtIdade);
  };
  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };
  const onChangePassword = (txtPassword) => {
    setPassword(txtPassword);
  };

  const Cadastration = () => {
    InsertName();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Cadastro efetuado com sucesso!", "Seja bem vindo");
        navigation.navigate("Login");
      })
      .catch(() => {
        Alert.alert("Erro!", "Usuário já existente ou não preenchido.");
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.ContainerCadastro}
    >
      <View style={styles.ContainerCadastro}>
        <View style={styles.logo_marca_home}>
          <Image source={require("../../assets/Imagens/user_icon.png")} />
        </View>

        <Text style={styles.TextTitle}>Criar conta</Text>

        <View style={styles.formCadastro}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value={nome}
            onChangeText={(txtNome) => onChangeNome(txtNome)}
          />
          <Text style={styles.label}>Data Nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/AAAA"
            value={idade}
            onChangeText={(txtIdade) => onChangeIdade(txtIdade)}
          />
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="fulano@gmail.com"
            value={email}
            onChangeText={(txtEmail) => onChangeEmail(txtEmail)}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha minima de 8 caracteres"
            secureTextEntry={true}
            value={password}
            onChangeText={(txtPassword) => onChangePassword(txtPassword)}
          />

          <TouchableOpacity
            style={styles.cadastroButton}
            onPress={Cadastration}
          >
            <Text style={styles.cadastro_textButton}> Finalizar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
