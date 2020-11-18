import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

import BemVindo1 from './pages/BemVindo/BemVindo1';
import BemVindo2 from './pages/BemVindo/BemVindo2';
import BemVindo3 from './pages/BemVindo/BemVindo3';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Historico from './pages/Historico';
import ListHome from './pages/List/QuestionarioHome';
import ListMaps from './pages/List/Maps';
import ListQuestIndic from './pages/List/QuestionarioIndicadores';
import ListTelefone from './pages/List/Telefones';
import DicasHome from './pages/Dicas/DicasHome';
import DicasCombate from './pages/Dicas/DicasCombate';
import DicasCriadouros from './pages/Dicas/DicasCriadouros';
import DicasCuidado from './pages/Dicas/DicasCuidado';
import DicasContrai from './pages/Dicas/DicasContrai';
import Config from './pages/Configuracao';
import Bemvindo1 from './pages/BemVindo/BemVindo1';

const Stack = createStackNavigator();

export default function Routes ({navigation}) {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='Login'>
                <Stack.Screen name = "Login" component={Login}/>
                <Stack.Screen name = "Cadastro" component={Cadastro}/>
                <Stack.Screen name = "Home" component ={Home}/>
                <Stack.Screen name = "Historico" component ={Historico}/>
                <Stack.Screen name = "ListHome" component ={ListHome}/>
                <Stack.Screen name = "ListMaps" component ={ListMaps}/>
                <Stack.Screen name = "ListQuestIndic" component ={ListQuestIndic}/>
                <Stack.Screen name = "ListTelefone" component ={ListTelefone}/>
                <Stack.Screen name = "DicasHome" component ={DicasHome}/>
                <Stack.Screen name = "DicasCombate" component ={DicasCombate}/>
                <Stack.Screen name = "DicasCriadouros" component ={DicasCriadouros}/>
                <Stack.Screen name = "DicasCuidado" component ={DicasCuidado}/>
                <Stack.Screen name = "DicasContrai" component ={DicasContrai}/>
                <Stack.Screen name = "Config" component ={Config}/> 
                <Stack.Screen name = "BemVindo1" component={Bemvindo1}/>
                <Stack.Screen name = "BemVindo2" component={BemVindo2}/>
                <Stack.Screen name = "BemVindo3" component={BemVindo3}/> 
            </Stack.Navigator>
        </NavigationContainer> 
       
    );
    
}
