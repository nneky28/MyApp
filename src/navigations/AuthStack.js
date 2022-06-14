import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './AuthScreens/Register';
import LoginScreen from './AuthScreens/LoginScreen';

const AuthStack = () => {
    const AuthStack = createNativeStackNavigator()
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}  >
            <AuthStack.Screen name='Login' component={LoginScreen} />
            <AuthStack.Screen name='Register' component={Register} />
        </AuthStack.Navigator>
    )
}

export default AuthStack