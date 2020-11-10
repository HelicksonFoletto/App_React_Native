import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const AuthStack = createStackNavigator();

const AuthRoutes  = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false}}>
        <AuthStack.Screen name = "Login" component={Login}/>
        <AuthStack.Screen name = "Cadastro" component={Cadastro}/>
    </AuthStack.Navigator>
)

export default AuthRoutes;