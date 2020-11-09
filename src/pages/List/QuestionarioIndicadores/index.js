import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';

import styles from '../../../assets/Css';

export default function QuestionarioIndicadores ({navigation}){
    return(
        <View style={styles.ContainerCadastro}>
            
            <View style={styles.ContainerList}>  
                <Text style={styles.TextTitleList}>Questionário</Text>
                
                <View style={styles.form_quest}>
                    <Text style={styles.title_pergunta}>Você já contraiu o vírus da Dengue?</Text> 
                    <TouchableOpacity style={styles.QuestCheck2}>
                        <Icon name='check-square' size={20} color="red" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}>NÃO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.QuestCheck1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}>SIM</Text>
                    </TouchableOpacity>

                    <Text style={styles.title_pergunta}>Algum membro da sua familia já teve contato com o virús?</Text> 
                    <TouchableOpacity style={styles.QuestCheck2}>
                        <Icon name='check-square' size={20} color="red" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}>NÃO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.QuestCheck1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}>SIM</Text>
                    </TouchableOpacity>

                    <Text style={styles.title_pergunta}>Sua familia já sofreu com alguma fatalidade ocasionada pela dengue??</Text> 
                    <TouchableOpacity style={styles.QuestCheck2}>
                        <Icon name='check-square' size={20} color="red" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}>NÃO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.QuestCheck1}>
                        <Icon name='check-square' size={20} color="white" onPress={() => {}}/>
                        <Text style={styles.descriptionSintomas}>SIM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.SaveButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.cadastro_textButton}> Salvar </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}