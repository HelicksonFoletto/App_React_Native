import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Historico from '../pages/Historico'
import ListHome from '../pages/List/QuestionarioHome';
import ListMaps from '../pages/List/Maps';
import ListQuestIndic from '../pages/List/QuestionarioIndicadores';
import ListTelefone from '../pages/List/Telefones';
import DicasHome from '../pages/Dicas/DicasHome';
import DicasCombate from '../pages/Dicas/DicasCombate';
import DicasCriadouros from '../pages/Dicas/DicasCriadouros';
import DicasCuidado from '../pages/Dicas/DicasCuidado';
import DicasContrai from '../pages/Dicas/DicasContrai';
import Config from '../pages/Configuracao';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false}}>
        <AppStack.Screen name = "Home" component ={Home}/>
        <AppStack.Screen name = "Historico" component ={Historico}/>
        <AppStack.Screen name = "ListHome" component ={ListHome}/>
        <AppStack.Screen name = "ListMaps" component ={ListMaps}/>
        <AppStack.Screen name = "ListQuestIndic" component ={ListQuestIndic}/>
        <AppStack.Screen name = "ListTelefone" component ={ListTelefone}/>
        <AppStack.Screen name = "DicasHome" component ={DicasHome}/>
        <AppStack.Screen name = "DicasCombate" component ={DicasCombate}/>
        <AppStack.Screen name = "DicasCriadouros" component ={DicasCriadouros}/>
        <AppStack.Screen name = "DicasCuidado" component ={DicasCuidado}/>
        <AppStack.Screen name = "DicasContrai" component ={DicasContrai}/>
        <AppStack.Screen name = "Config" component ={Config}/>
    </AppStack.Navigator>    
)

export default AppRoutes;