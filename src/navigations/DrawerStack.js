
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tab from './Tab';
import TeamStack from './TeamStack';
import { TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons/Feather';


const DrawerStack = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Main' component={Tab} />
            <Drawer.Screen name='Team' component={TeamStack} />
        </Drawer.Navigator>
    )
}

export default DrawerStack;