import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import ButtonComponent from '../ButtonComponent'
import AppColors from '../../styles/AppColors'
import { globalStyles } from './../../styles/global';
import { width, height } from 'react-native-dimension';
import { H1, P } from '../../utils/MyComponent';

const OutCard = () => {
    return (
        <View style={styles.OutCard} >
            <View>

                <Image source={require('../../assets/images/dummy/placeholder.png')} style={globalStyles.avatarStyle4} />
            </View>


            <View style={styles.textContent}>
                <H1 numberOfLines={1}>Aderinsola Derin</H1>
                <P style={styles.titleText}>Lead Designer </P>

                <ButtonComponent
                    backgroundColor={AppColors.red}
                    title={'Sick Leave'}
                    width={80}
                    padding={3}
                    borderRadius={20}

                />
            </View>

        </View>
    )
}

export default OutCard;
const styles = StyleSheet.create({
    textContent: {
        justifyContent: 'space-between',
        marginLeft: width(4),
        marginTop: height(1.2),
    },
    titleText: {
        fontSize: width(3),
        color: AppColors.black1,
        marginTop: height(0.5),
        fontFamily: 'BlackSans-Regular',
        marginBottom: height(1)
    },
    OutCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: AppColors.gray,
        borderWidth: 1,
        borderRadius: width(1),
        paddingHorizontal: width(4),
        width: width(40),
        backgroundColor: '#eee',
        marginLeft: width(3),
        marginTop: height(2),
        paddingVertical: height(0.5)
    },




})