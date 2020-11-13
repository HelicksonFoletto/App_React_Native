import React, { useContext, useState } from 'react';
import {KeyboardAvoidingView,
    View, 
    TouchableOpacity, 
    Image, 
    TextInput, 
    Text,
    Platform,
    Alert
} from 'react-native';
import firebase from '../../services/Firebase';

import styles from '../../assets/Css';

function Login({navigation}){
    
    function navegarSucess(){
        navigation.navigate('Home')
    }
    function navegarFailed(){
        Alert.alert('Usuário ou senha invalido!','Por favor tente novamente.')
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) =>{
        setPassword(txtPassword)
    }
    const login = () =>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            navegarSucess()
        }).catch(()=>{
            navegarFailed()
        })
    }

    return(
        
        <KeyboardAvoidingView 
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.containerLogin}
            >   
            <View style={styles.containerLogin}>
                <View style={styles.logo_marca_home}>
                    <Image source={require('../../assets/Imagens/logo_marca.png')}/>
                </View>
                

            <View style={styles.login_form}>   
                <TextInput
                    style={styles.login_input}
                    placeholder="Digite seu e-mail:"
                    value={email}
                    onChangeText={txtEmail => onChangeEmail(txtEmail)}
                />
                <TextInput
                   style={styles.login_input}
                   placeholder="Digite sua senha:" 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={txtPassword => onChangePassword(txtPassword)}
                />
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.ButtonEsqueci} >
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button} onPress={login}>
                    <Text style={styles.login_buttonText}>Entrar</Text>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.buttonCadastro} >
                        Novo por aqui? Cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>             
        </View>
    </KeyboardAvoidingView>

    );
}
export default Login;