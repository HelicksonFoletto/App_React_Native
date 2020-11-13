import React, {useState} from 'react';
import { View, 
    Image, 
    Text,
    TextInput,
    Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../services/Firebase';
import styles from '../../assets/Css';

export default function Cadastro ({navigation}){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) =>{
        setPassword(txtPassword)
    }
    const Cadastration = () => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
            Alert.alert('Cadastro efetuado com sucesso!','Seja Bem vindo a esta luta')
            navigation.navigate('Login')
        }).catch(()=>{
            Alert.alert('Erro!','Tente novamente.')
        })
    }
    
    return(
        <View style={styles.ContainerCadastro}>

            <View style={styles.logo_marca_home}>
                <Image source={require('../../assets/Imagens/user_icon.png')}/>
            </View>

            <Text style={styles.TextTitle}>Criar conta</Text>

            <View style={styles.formCadastro}>
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome completo'
                />

                <Text style={styles.label}>Data Nascimento</Text>
                <TextInput
                     style={styles.input}
                     placeholder='dd/mm/AAAA'
                />

                <Text style={styles.label}>E-mail</Text>
                <TextInput
                     style={styles.input}
                     placeholder='fulano@gmail.com'
                     value={email}
                    onChangeText={txtEmail => onChangeEmail(txtEmail)}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                     style={styles.input}
                     placeholder='Senha'
                     secureTextEntry={true}
                     value={password}
                    onChangeText={txtPassword => onChangePassword(txtPassword)}
                />
                <Text style={styles.label}>Sexo</Text>
                <TextInput
                     style={styles.input}
                     placeholder='Sexo'
                     
                />

                <TouchableOpacity style={styles.cadastroButton} onPress={Cadastration}>
                    <Text style={styles.cadastro_textButton}> Finalizar </Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}