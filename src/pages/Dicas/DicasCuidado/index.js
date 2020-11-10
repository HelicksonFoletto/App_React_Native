import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import AuthContext from '../../../contexts/auth'
import styles from '../../../assets/Css';

export default function DicasCuidado ({navigation}){
    return(
        <View style={styles.ContainerCadastro}>
            <Text>Imagine um Cuidados aqui</Text> 
        </View>
    );
}