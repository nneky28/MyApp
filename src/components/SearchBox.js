import React, { useEffect } from 'react';
import { Image, Keyboard, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { searchIcon } from '../assets/images';
import { setBottomTabBarVisible } from '../Redux/Actions/Config';
import AppColors from '../styles/AppColors';
import { FontFamily } from '../utils/FontFamily';
import { globalStyles } from '../styles/global';




export default function SearchBox({ title, containerStyle, onSubmitEditing }) {
    const dispatch = useDispatch();

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => dispatch(setBottomTabBarVisible(false)));
        Keyboard.addListener('keyboardDidHide', () => dispatch(setBottomTabBarVisible(true)))

    }, []);
    return (
        <View style={[globalStyles.container, containerStyle]}>
            <Image source={searchIcon} style={globalStyles.searchIcon} />
            <TextInput
                style={globalStyles.inputStyle}
                placeholder={title}
                fontFamily={FontFamily.BlackSansRegular}
                placeholderTextColor={AppColors.black3}
                keyboardType='default'
                onChangeText={onSubmitEditing}
                onSubmitEditing={onSubmitEditing}
                color={AppColors.black}
            />

        </View>
    );
}

// export const SearchBoxIOS = ({ title, containerStyle, onSubmitEditing }) => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         Keyboard.addListener('keyboardDidShow', () => dispatch(setBottomTabBarVisible(false)));
//         Keyboard.addListener('keyboardDidHide', () => dispatch(setBottomTabBarVisible(true)))

//     }, []);
//     return (
//         <View style={[globalStyles.container, containerStyle]}>
//             <Image source={searchIcon} style={globalStyles.searchIcon} />
//             <TextInput
//                 style={globalStyles.inputStyleIOS}
//                 placeholder={title}
//                 fontFamily={FontFamily.BlackSansRegular}
//                 placeholderTextColor={AppColors.black3}
//                 keyboardType='default'
//                 onChangeText={onSubmitEditing}
//                 onSubmitEditing={onSubmitEditing}
//                 color={AppColors.black}
//             />

//         </View>
//     );
// }
