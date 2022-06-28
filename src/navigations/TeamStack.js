import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Modules from './../screens/Modules';
import Notification from './../screens/Notification';
import Profile from './../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/HomeScreen';

const TeamStack = () => {

    const Stack = createNativeStackNavigator()
    const Tabs = createBottomTabNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen
                name="Team">
                {
                    () => (
                        <Tabs.Navigator screenOptions={{ headerShown: false }}>

                            <Tabs.Screen name="DashBoard" component={HomeScreen} options={{

                                tabBarIcon: () => <Ionicons name="home-outline" size={25} />
                            }} />
                            <Tabs.Screen name="Modules" component={Modules} options={{
                                tabBarIcon: () => <Ionicons name="grid-outline" size={25} />
                            }} />
                            <Tabs.Screen name='Notification' component={Notification} options={{
                                tabBarIcon: () => <Ionicons name="notifications-outline" size={25} />
                            }} />
                            <Tabs.Screen name='Profile' component={Profile} options={{
                                tabBarIcon: () => <Ionicons name="person-outline" size={25} />
                            }} />

                        </Tabs.Navigator>
                    )
                }
            </Stack.Screen>


        </Stack.Navigator>
    )
}

export default TeamStack