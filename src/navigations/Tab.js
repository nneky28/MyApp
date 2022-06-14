import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashBoard from './../screens/DashBoard';
import Modules from './../screens/Modules';
import Profile from './../screens/Profile';
import Tab_Pills from '../components/Tab_Pills';
import Notification from '../screens/Notification';

const Tab = () => {

    const Tabs = createBottomTabNavigator()
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>

            <Tabs.Screen name="Home" component={Notification} options={{

                tabBarIcon: () => <Ionicons name="home-outline" size={25} />
            }} />
            <Tabs.Screen name="Modules" component={Modules} options={{
                tabBarIcon: () => <Ionicons name="grid-outline" size={25} />
            }} />
            <Tabs.Screen name='People' component={Tab_Pills} options={{
                tabBarIcon: () => <Ionicons name="people-outline" size={25} />
            }} />
            <Tabs.Screen name='Profile' component={Profile} options={{
                tabBarIcon: () => <Ionicons name="person-outline" size={25} />
            }} />

        </Tabs.Navigator>
    )
}

export default Tab