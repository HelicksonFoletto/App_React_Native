import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Historico from './pages/Historico'
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

export default function Routes (){
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
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
                <Stack.Screen name = "DicasContrai" component ={DicasContrai}/>
                <Stack.Screen name = "Config" component ={Config}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}