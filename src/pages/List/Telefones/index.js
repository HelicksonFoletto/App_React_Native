import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';

import styles from '../../../assets/Css';
export default function Telefone ({navigation}){
    return(
        <View style={styles.ContainerCadastro}>

        <View style={styles.cabecalhoListPhone}> 
            <Text style={styles.text}>Telefones de Emergência</Text> 
           
        </View>

        <View style={styles.histSintomas}>
            <Text style={styles.descriptionFone}>
                SIAT
            </Text>
            <Text  style={styles.descriptionPhoneText1}>
                (45) 3524 - 3877
            </Text>

            <Text style={styles.descriptionFone1}>
                SAMU
            </Text>
            <Text  style={styles.descriptionPhoneText2}>
                (45) 3573 - 6360/ Emergência (192)
            </Text>

            <Text style={styles.descriptionFone2}>
                Hospital Municipal de Foz do Iguaçu
            </Text>
            <Text  style={styles.descriptionPhoneText3}>
                (45) 3521 - 1950
            </Text>

            <Text style={styles.descriptionFone3}>
                14º Batalhao de Polícia Militar
            </Text>
            <Text  style={styles.descriptionPhoneText4}>
                (45) 3527 - 2133 / Emergência (190)
            </Text>
            
            
            
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