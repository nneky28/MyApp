import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import AppColors from '../styles/AppColors';
import { globalStyles } from '../styles/global';


export default function Loader() {
    const isLoaderVisible = useSelector((state) => state.Config.isLoaderVisible);
    return (
        <Modal isVisible={isLoaderVisible} backdropOpacity={0.4}>
            <View style={globalStyles.container}>
                <ActivityIndicator size="large" color={AppColors.black} />
            </View>
        </Modal>
    );
}
