import { View, Text, Image, Spinner, BackHandler, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from '../../components/Input'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { globalStyles } from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Actions/Auth';
import { showMessage } from 'react-native-flash-message';
import { setLoaderVisible } from '../../Redux/Actions/Config';
import { employees_me, getAPIs, postNoToken } from '../../utils/Api';
import { ToastError, ToastSuccess, storeData } from '../../utils/Method'
import Button from './../../components/Button/index';



const LoginScreen = ({ route, navigation }) => {
    const auth = useSelector((state) => state.Auth);
    const dispatch = useDispatch();

    // console.log(">>>>", auth)
    const [show, setShow] = useState(true)
    const handleSwitch = () => {
        setShow(!show)
        // console.warn(show, 'clicked')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleSubmit = async () => {
        if (!email || email.trim() === '' || !password || password.trim() === '') {
            return ToastError("All fields are required")
        }
        // alert('one')
        try {
            dispatch(setLoaderVisible(true));
            const fd = {
                email: email,
                password: password
            }
            // console.warn('yesssss', fd)
            const userInfo = await postNoToken('/accounts/auth/employees/login/', fd)
            let token = userInfo.access_token ? userInfo.access_token : null;
            await storeData("token", token)
            // console.log("postNoToken-res", userInfo, token)
            let refresh = userInfo.refresh_token ? userInfo.refresh_token : null;
            let business = userInfo.user.employee_user_memberships &&
                Array.isArray(userInfo.user.employee_user_memberships) &&
                userInfo.user.employee_user_memberships.length > 0 ?
                userInfo.user.employee_user_memberships[0] : null;

            if (!business) return ToastError("No business connected to this account");
            let employees_me_url = employees_me(business.business_id);
            let about_me = await getAPIs(employees_me_url, token);
            // console.log('>>>>>>>', about_me)
            await storeData("refresh", refresh);
            await storeData("about_me", about_me)
            await storeData("user", userInfo.user);

            console.log('>>>>>', userInfo.user)

            ToastSuccess("Login was successful")
            dispatch(setLoaderVisible(false));
            return dispatch(login({ ...auth, user: { userName: "Joe" }, route: "Home", isLogin: true }));

            // console.log(route)

        } catch (err) {
            console.log("errr", err);
            dispatch(setLoaderVisible(false));
            let msg = "";
            if (err.msg && err.msg.code === "invalid_credentials") {
                msg = "You don cook beans"
            }
            msg = err.msg && err.msg.code && typeof (err.msg.code) == "string" ? "You don cook beans." : "Something went wrong. Please retry"
            ToastError(msg)
        }
    }




    return (
        <KeyboardAvoidingScrollView justifyContent='center' >
            <View style={globalStyles.container}>
                <View style={globalStyles.body}>
                    <View style={globalStyles.edgeLogo}>
                        <Image
                            source={{ uri: 'https://bizedge-prod.s3.us-west-2.amazonaws.com/myedge-mobile/myedge_l7tjva.png' }}
                            style={{ flex: 1, resizeMode: 'contain' }}
                        />
                    </View>
                    <Text style={globalStyles.bgText}>Welcome</Text>
                    <Input
                        placeholder={'Email'}
                        onChangeText={(value) => setEmail(value)}
                        underlineColorAndroid="transparent"
                        keyBoardType={'email-address'}
                        value={email}
                    />
                    <Input
                        placeholder={'Password'}
                        secureTextEntry={show}
                        onChangeText={(value) => setPassword(value)}
                        pressHandler={handleSwitch}
                        show={show}
                        value={password}
                        maxlength={10}
                        icon
                    />

                    <Button title={'SIGN IN'} onPress={() => handleSubmit()} />
                    {/* <TouchableOpacity onPress={() => handleSubmit()}><Text>Hello</Text></TouchableOpacity> */}
                    <Text style={globalStyles.password}>Forgot Password?</Text>
                </View>

                <View style={globalStyles.bottomContainer}>
                    <Text style={globalStyles.bottomText}>MyEdge is part of BizEdge Productivity Tool</Text>
                </View>

            </View>
        </KeyboardAvoidingScrollView>

    )
}

export default LoginScreen;

