import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modules from './../screens/Modules';
import Profile from './../screens/Profile';
import PeopleTab from './../components/PeopleTab';
import HomeScreen from './../screens/HomeScreen';


const Tab = () => {

    const Tabs = createBottomTabNavigator()
    return (


        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color = '#2898A4', size = 25 }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? "home"
                            : 'home-outline';
                    } else if (route.name === 'Modules') {
                        iconName = focused ? 'grid' : 'grid-outline';
                    } else if (route.name === 'People') {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2898A4',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}

        >
            <Tabs.Screen name="Home" component={HomeScreen} />
            <Tabs.Screen name="Modules" component={Modules} />
            <Tabs.Screen name='People' component={PeopleTab} />
            <Tabs.Screen name='Profile' component={Profile} />

        </Tabs.Navigator>


    )
}

export default Tab