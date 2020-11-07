import React from 'react';
import { View, 
    Text, 
    TouchableOpacity,
} from 'react-native';

import Icon  from 'react-native-vector-icons/FontAwesome';

import styles from '../../assets/Css'

export default function Home ({navigation}){
    return(
        <View  style={styles.ContainerCadastro}>

            <View style={styles.cabecalho}> 
                <Text style={styles.text}>Bom dia, Fulano</Text>
                <Icon name='user' size={80} color="black"/>
               
            </View>
            
            <View style={styles.quadrados}>
            <View style={styles.quadrado2}>
                    <Text style={styles.title}>Use Máscara</Text>
                    <Text style={styles.description}>
                        A máscara protege você e quem está próximo, do novo Coronavírus
                    </Text>
                </View>
                <View style={styles.quadrado1}>
                    <Text style={styles.title}>Hidrate-se</Text>
                    <Text style={styles.description}>
                        O clima está seco Manter-se hidratado é fundamental para o bom funcionamentodo seu organismo 
                    </Text>
                </View>

                
            </View>

            <View style={styles.hist}>
                <Text style={styles.histText}>
                    Nenhum caso suspeito em sua região
                </Text>
                <Text  style={styles.descriptionHist}>
                    Mantenha seu estado de saúde atualizado
                </Text>
                
                <Text style={styles.histText}>
                    Seu estado de saúde é BOM!
                </Text>
                <Text  style={styles.descriptionHist}>
                    Pratique atividades fisicas e mantenha uma alimentação saudável
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