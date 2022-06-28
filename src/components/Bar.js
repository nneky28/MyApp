import { View, Text } from 'react-native'
import React from 'react'
import { login, logout } from '../Redux/Actions/Auth';
import { globalStyles } from './../styles/global';
import AppColors from '../styles/AppColors';
import { useDispatch, useSelector } from 'react-redux';
import {
    settingIcon,
    logoutIcon,
} from '../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastSuccess } from '../utils/Method';
import { ItemWithText } from '../utils/MyComponent'

const Bar = ({ navigation, ...props }) => {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.Auth);


    const logoutMethod = async () => {
        // try {
        //     let payload = await AsyncStorage.getItem('token')
        //     let token = JSON.parse(payload)
        //     await AsyncStorage.removeItem(token.value)
        //     AsyncStorage.removeItem('token')
        //     return token.value
        // } catch (error) {
        //     console.log('AsyncStorage Error: ' + error)
        // }
        console.log('clicked')

        let keys = await AsyncStorage.getAllKeys()
        console.log('first', keys)
        await AsyncStorage.multiRemove(keys);
        dispatch(login({ ...auth, route: "auth", isLogin: false }));
        ToastSuccess("Successfully logged out")
    }
    return (
        <React.Fragment>
            <Text style={globalStyles.text}>Businesses</Text>
            <View style={globalStyles.lineBar} />

            <View style={[globalStyles.barOption, { backgroundColor: AppColors.gray1 }]} />
            <ItemWithText icon={settingIcon} text="Settings" onPress={() => {
                navigation.navigate("Profile")
            }} />
            <ItemWithText onPress={logoutMethod} icon={logoutIcon} text="Sign Out" />
        </React.Fragment>
    )
}

export default Bar