import React, { useEffect } from 'react'
import ScreensContainer from '../components/ScreensContainer'
import AppColors from '../styles/AppColors';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../utils/Method';
import { login } from '../Redux/Actions/Auth';
import { ActivityIndicator } from 'react-native-paper';

const Splash = () => {

    const auth = useSelector((state) => state.Auth);
    const dispatch = useDispatch();

    const loginMethod = async () => {
        dispatch(setLoaderVisible(true));
        let user = await getData("user")
        setTimeout(() => {
            if (user) {
                dispatch(login({ ...auth, user: user, isLogin: true, route: "main" }));
            } else {
                dispatch(login({ ...auth, user: user, isLogin: true, route: "auth" }));
            }
        }, 3000);
    };
    useEffect(() => {
        loginMethod()
    }, [])

    return (
        <ScreensContainer statusBarColor={AppColors.white}>
            <View style={{
                display: 'flex',
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}>

                {/* <Image source={require('../assets/images/icons/bg.png')}
                    style={style.resize}
                /> */}
                {/* <ActivityIndicator color='#000' size={28} /> */}
                <ActivityIndicator color={AppColors.green} size={20} />
            </View>
        </ScreensContainer>
    )
}

const style = StyleSheet.create({
    resize: {
        width: 300,
        height: 300,
    }
})

export default Splash