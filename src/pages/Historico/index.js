import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from '../../assets/Css'
import Icon  from 'react-native-vector-icons/FontAwesome';

export default function Historico ({navigation}){
    return(
        <View style={styles.ContainerCadastro}>

            <View style={styles.cabecalhoList}> 
                <Text style={styles.text}>Suas Listas</Text> 
               
            </View>

            <View style={styles.histSintomas}>
                <Text style={styles.histTexSintomas}>
                    Seg, 26 de outubro
                </Text>
                <Text  style={styles.descriptionHistSintomas}>
                    Nenhum sintoma apresentado
                </Text>

                <Text style={styles.histTexSintomas}>
                    Ter, 27 de outubro
                </Text>
                <Text  style={styles.descriptionHistSintomas}>
                    Nenhum sintoma apresentado
                </Text>

                <Text style={styles.histTexSintomas}>
                    Qua, 28 de outubro
                </Text>
                <Text  style={styles.descriptionHistSintomas}>
                    Nenhum sintoma apresentado
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