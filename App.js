import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import DrawerStack from './src/navigations/DrawerStack';
import AuthStack from './src/navigations/AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './src/components/Loader';
import { Text, ScrollView, View } from 'react-native'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'



const queryClient = new QueryClient()
const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const route = useSelector((state) => state.Auth.route);
  // console.warn("ROUTE", route)
  const auth = useSelector((state) => state.Auth)
  const dispatch = useDispatch();


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  if (isLoading) {
    return <Splash />
  }


  const RootStack = createNativeStackNavigator()

  const RootScreen = () => (

    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>

      {route === 'Home' ? (
        <RootStack.Screen name="Home" component={DrawerStack} />
      ) : (

        <RootStack.Screen name='User' component={AuthStack} />

      )}
    </RootStack.Navigator>
  )




  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Loader />
        <RootScreen />
      </NavigationContainer>
    </QueryClientProvider>

  )
};

export default App;
// 