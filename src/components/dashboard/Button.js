import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppColors from '../../styles/AppColors';
import { width } from 'react-native-dimension';


const Button = ({
    title,
    onPress,
    disabled = false,
    isLoading = false,
    loaderColor = AppColors.white,
    activeOpacity = 0.7,
    containerStyle = {},
    textStyle = {},
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isLoading}
            activeOpacity={activeOpacity}
            style={[styles.container, containerStyle]}>
            {isLoading ? (
                <ActivityIndicator color={loaderColor} size="large" />
            ) : (
                <Text style={[styles.text, textStyle]} numberOfLines={1}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: AppColors.green,
        width: '80%',
        alignSelf: 'center',
        paddingVertical: 10,
        margin: 8,
        ...AppColors.shadowStyles,
    },
    text: {
        color: AppColors.white,
        fontSize: width(4),
    },
});


