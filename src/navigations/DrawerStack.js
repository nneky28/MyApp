
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tab from './Tab';
import TeamStack from './TeamStack';
import Details from './../components/Details';
import Bar from './../components/Bar';


const DrawerStack = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}
            drawerContent={(props) => <Bar {...props} />}
        >
            <Drawer.Screen name='Main' component={Tab} />
            <Drawer.Screen name='Details' component={Details} />
            <Drawer.Screen name='Team' component={TeamStack} />
        </Drawer.Navigator>
    )
}

export default DrawerStack;