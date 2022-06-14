
import React, { useContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/contexts';
import DrawerStack from './DrawerStack';
import AuthStack from './AuthStack';


const RootScreen = () => {
    const [userToken, setUserToken] = useState(null);
    const RootStack = createNativeStackNavigator()
    // const { userToken } = useContext(AuthContext)

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='People'>
            {userToken ? (

                <RootStack.Screen name="Home" component={DrawerStack} />
            ) : (

                <RootStack.Screen name='User' component={AuthStack} />
            )}
        </RootStack.Navigator>
    )
}

export default RootScreen