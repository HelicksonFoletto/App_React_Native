import React from 'react';
import {KeyboardAvoidingView,
    View, 
    TouchableOpacity, 
    Image, 
    TextInput, 
    Text,
    Platform,
} from 'react-native';

import styles from '../../assets/Css';

export default function Login({navigation}){
    

    return(
        <View style={styles.containerLogin}>
            <View style={styles.logo_marca_home}>
                <Image source={require('../../assets/Imagens/logo_marca.png')}/>
            </View>

            <KeyboardAvoidingView 
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.containerLogin}
            >   

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
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text style={styles.ButtonEsqueci} >
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.login_buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View> 

            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.buttonCadastro} >
                        Novo por aqui? Cadastre-se
                    </Text>
            </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>

        

    );
}