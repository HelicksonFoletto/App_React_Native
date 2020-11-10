import React from 'react';
import { View, 
    Image, 
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from '../../assets/Css';


export default function Cadastro ({navigation}){
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
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                     style={styles.input}
                     placeholder='Senha'
                     secureTextEntry={true}
                />
                <Text style={styles.label}>Sexo</Text>
                <TextInput
                     style={styles.input}
                     placeholder='Sexo'
                     secureTextEntry={true}
                />

                <TouchableOpacity style={styles.cadastroButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.cadastro_textButton}> Finalizar </Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}