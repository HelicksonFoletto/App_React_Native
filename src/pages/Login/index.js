import React, {useState, useEffect}from 'react';
import {KeyboardAvoidingView,
    View, 
    TouchableOpacity, 
    Image, 
    TextInput, 
    Text,
    Platform,
} from 'react-native';


import styles from '../../assets/Css';

export default function Login({navigation, propos}){
    //const [display, setDisplay] = useState('none')

    //const [ values, setValues] =  useState(initialState);

    //function onChange(event){
    //    const {value, name} = event.target;

    //    setValues({
    //        ...values,
    //        [name]: value,
     //   });
    //}

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
                    //name='user'
                    //id='user'
                    //onChange={onChange} value={values.user}
                />
                <TextInput 
                    style={styles.login_input}
                    //id='passoword' 
                    //name='password'
                    placeholder='Senha:' 
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.ButtonEsqueci} >
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate('Home')}>
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