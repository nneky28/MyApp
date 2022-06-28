import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from './../../styles/global';
import CommonStyles from './../../styles/CommonStyles';
import { H1, P } from '../../utils/MyComponent';
import { width, height } from 'react-native-dimension';

const BirthDayCard = () => {
    return (
        <View style={globalStyles.birthdayCard} >
            <View>
                <Image source={require('../../assets/images/dummy/placeholder.png')} style={globalStyles.avatarStyle4} />
            </View>


            <View style={styles.textContent} >
                <H1 style={globalStyles.nameText}>Aderinsola </H1>
                <P style={globalStyles.titleText}>Lead Designer </P>
                <P style={globalStyles.titleText}> Jan 14</P>
            </View>

        </View>
    )
}

export default BirthDayCard;
const styles = StyleSheet.create({
    textContent: {
        justifyContent: 'space-between',
        marginLeft: width(4),
        // marginTop: height(0.5),
        paddingHorizontal: width(0.5)
    }
})