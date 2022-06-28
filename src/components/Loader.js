import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { width } from 'react-native-dimension';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import AppColors from '../styles/AppColors';
import { globalStyles } from '../styles/global';
import { Images } from '../assets/images/index';



export default function Loader() {
    const isLoaderVisible = useSelector((state) => state.Config.isLoaderVisible);

    return (
        <View style={globalStyles.loading}>
            <Modal isVisible={isLoaderVisible} backdropOpacity={0.4} >
                <View style={globalStyles.ModalContainer}>
                    <ActivityIndicator size="large" color={AppColors.black} style={globalStyles.loader} />
                </View>
            </Modal>
        </View>

        // <View style={globalStyles.loading}>
        //     {/* <Text>Loading ....</Text> */}
        //     <View style={globalStyles.ModalContainer}>
        //         <ActivityIndicator size="large" color={AppColors.black} style={globalStyles.loader} />
        //     </View>
        // </View>
    );
}
