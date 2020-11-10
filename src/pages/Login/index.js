import React, { useContext } from 'react';
import {KeyboardAvoidingView,
    View, 
    TouchableOpacity, 
    Image, 
    TextInput, 
    Text,
    Platform,
} from 'react-native';
import AuthContext from '../../contexts/auth';


import styles from '../../assets/Css';

export default function Login({navigation}){
    const { signed, signIn } = useContext(AuthContext);
    
    console.log(signed)

    function handleSignIn(){
        signIn();
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
                 
                <View>
                    <Text style={styles.login__msg()}>Usuário ou senha inválidos!</Text> 
                </View>

            <View style={styles.login_form}>   
                <TextInput
                    style={styles.login_input}
                    placeholder="E-mail ou usuário:"
                />
                <TextInput 
                    style={styles.login_input}
                    placeholder='Senha:' 
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.ButtonEsqueci} >
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button} onPress={handleSignIn}>
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