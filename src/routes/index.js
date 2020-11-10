import React, {useContext} from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import AuthContext  from '../contexts/auth';

const Routes = () => {
    const {signed, loading} = useContext(AuthContext);;

    if(loading){
        <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
            <ActivityIndicator size='large'/>
        </View>
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;