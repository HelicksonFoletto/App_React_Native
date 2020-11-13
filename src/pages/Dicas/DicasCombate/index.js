import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../../../assets/Css';

export default function DicasCombate ({navigation}){
    
    return(
        <View style={styles.ContainerCadastro}>

        <View style={styles.cabecalhoList}> 
            <Text style={styles.text}>Combate ao Mosquito</Text> 
           
        </View>

        <View style={styles.buttonDicas}>
            <Text style={styles.TextCombate}>
            O Aedes aegypti é um mosquito doméstico. Ele vive dentro de casa e perto do homem. Com hábitos diurnos, o mosquito se alimenta de sangue humano, sobretudo ao amanhecer e ao entardecer. A reprodução acontece em água limpa e parada, a partir da postura de ovos pelas fêmeas. Os ovos são colocados e distribuídos por diversos criadouros.
Em menos de 15 minutos é possível fazer uma varredura em casa e acabar com os recipientes com água parada – ambiente propício para procriação do Aedes aegypti.
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