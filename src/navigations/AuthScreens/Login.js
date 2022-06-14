import { Text, Button } from 'react-native'
import React, { useContext } from 'react'
import ScreensContainer from '../../components/ScreensContainer'

import { AuthContext } from '../../context/contexts'
const Login = ({ navigation }) => {
    const { Login } = useContext(AuthContext)
    return (
        <ScreensContainer>
            <Text>Login</Text>
            <Text>Dont have an Account ?... REGISTER</Text>
            <Button title='Login' onPress={() => navigation.navigate('Home')} />
        </ScreensContainer>
    )
}

export default Login;