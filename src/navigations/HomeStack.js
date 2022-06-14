import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import People from '../screens/People';



const HomeStack = () => {

  const Stack = createNativeStackNavigator();

  return (

    <Stack.Navigator>
      <Stack.Screen
        name="People"
        component={People}
        options={{ headerTitle: 'People' }}
      />
    </Stack.Navigator>

  )
}


export default HomeStack;