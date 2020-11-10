import React,{useContext} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';

import AuthContext from '../../contexts/auth';

import styles from '../../assets/Css';

export default function Configuracao ({navigation}){
    const { signed, user, signOut } = useContext(AuthContext);
    
    function handleSignOut(){
        signOut();
    }
    return(
        <View style={styles.ContainerCadastro}>

        <View style={styles.cabecalhoConfig}> 
            <Text style={styles.text}>Configurações</Text> 
           
        </View>

        <View style={styles.buttonDicas}>
            <View style={styles.inf}>
                <Icon name='user' size={80} color="black"/>
                <Text style={styles.nameUser}> { user.name} </Text>
                <Text style={styles.emailUser}> {user.email}  </Text>
                <TouchableOpacity style={styles.buttonSair} onPress={handleSignOut}>
                    <Icon name="power-off" size={40} color="black"/>
                </TouchableOpacity>
                
            </View>

            <View style={styles.notificacao}>
                <Text style={styles.titleNotificacao}>Notificações</Text>
                <Text style={styles.descriptionNotificacao}>Receber notificações importantes</Text>
                <TouchableOpacity style={styles.buttonNotificacao}>
                    <Icon name='toggle-on' size={50} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.modoEscuro}>
                <Text style={styles.titleNotificacao}>Modo Escuro</Text>
                <Text style={styles.descriptionModo}>
                    Troca as cores para tons escuros e predominantemente preto
                </Text>
                <TouchableOpacity style={styles.buttonModoEscuro}>
                    <Icon name='toggle-on' size={50} color="black" />
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

        <View style={styles.icon_menu}>
                <TouchableOpacity style={styles.itemMenuHome} >
                    <Icon name='home' size={50} color="black" onPress={() => navigation.navigate('Home')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemMenuList} onPress={() => navigation.navigate('Historico')}>
                    <Icon name='list' size={50} color="black"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemMenuMais} onPress={() => navigation.navigate('ListHome')}>
                    <Icon name='plus-circle' size={100} color="green"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemMenuDica} onPress={() => navigation.navigate('DicasHome')}>
                    <Icon name='comment' size={50} color="black"/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.itemMenuConfig} onPress={() => navigation.navigate('Config')}>
                    <Icon name='cog' size={50} color="black"/>
                </TouchableOpacity>
         </View>
    </View>
    );
}