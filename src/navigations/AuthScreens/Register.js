import { Text, Button } from 'react-native'
import React from 'react'
import ScreensContainer from '../../components/ScreensContainer'



const Register = ({ navigation }) => {
    return (
        <ScreensContainer>
            <Text>Create an Account</Text>
            <Text> Have an Account?... Login</Text>

            <Button title='Register' onPress={() => navigation.navigate('Login')} />
        </ScreensContainer>
    )
}

export default Register;

