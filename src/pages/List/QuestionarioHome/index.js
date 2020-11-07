import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';

import styles from '../../../assets/Css';

export default function QuestionarioHome ({navigation}){
    return(
        <View style={styles.ContainerCadastro}>
            
            <View style={styles.ContainerList}>  
                <Text style={styles.TextTitleList}>Nova Lista</Text>
                <Text style={styles.descriptionList}> Faça sua autoavaliação. O que você está sentindo?</Text>
                
                <View style={styles.form_quest}>
                    <TouchableOpacity style={styles.check1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}>Cansaço Extremo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.check1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}> Dor Abdominal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.check1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}> Dor de cabeça</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.check1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}> Dor nos olhos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.check1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}> Enjoo e vômito</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.check1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}>Febre Alta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.check1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}> Mal-Estar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.check1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}> Manchas na Pele</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.check1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}> Estou bem!</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.SaveButton} onPress={() => {}}>
                        <Text style={styles.cadastro_textButton}> Salvar </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.icon_menu_dicas}>
                <TouchableOpacity style={styles.itemMenuPhone} >
                    <Icon name='mobile' size={50} color="black" onPress={() => navigation.navigate('ListTelefone')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemMenuMaps} >
                    <Icon name='map' size={50} color="black" onPress={() => navigation.navigate('ListMaps')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemMenuQuest} >
                    <Icon name='address-card' size={50} color="black" onPress={() => navigation.navigate('ListQuestIndic')}/>
                </TouchableOpacity>  
            </View>
        </View>
    );
}