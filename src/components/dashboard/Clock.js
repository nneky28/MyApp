import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, } from 'react-native';
import AppColors from '../../styles/AppColors';
import { View, TextInputChangeEventData } from 'react-native';
import { height, width } from 'react-native-dimension';
import { Container, H1, P } from '../../utils/MyComponent';
import moment, { utc } from 'moment';




const Clock = () => {

    const greetingText = () => {
        const currentHour = moment().format("HH");
        if (currentHour == 0 || currentHour < 12) return "Good Morning"
        else if (currentHour <= 19) return "Good Afternon"
        else return "Good Evening"
    }


    return (
        <>
            <Container
                backgroundColor={AppColors.lightPink}
                width={90}
                marginTop={3}
                style={{
                    height: height(30),
                    borderWidth: width(0.5),
                    borderColor: '#F8B636',
                    borderRadius: width(10),
                    alignSelf: 'center',
                    position: 'relative',
                    marginBottom: height(18)
                }}
            >
                <View style={styles.textBox}>
                    <H1 fontSize={3.3} color={AppColors.darkGray}>{greetingText()},</H1>
                    <H1 fontSize={5} color={AppColors.black1}>
                        {moment().format("dddd, DD MMM YYYY")}
                    </H1>
                    <H1> Working Hours-{utc(moment().diff(moment())).format("HH:mm")}</H1>
                </View>
            </Container>

            <View style={styles.whiteBox}>

                <P >Time</P>
                <H1 style={{ marginLeft: width(5) }} fontSize={10}>{moment().format("HH : mm A")}</H1>
                <View style={styles.line} />
                <P textAlign={'center'}
                    style={{ marginLeft: width(7) }}
                >Clock In time: -- : --</P>

            </View>


        </>

    )
}


export default Clock;

const styles = StyleSheet.create({

    attendance_tab: {
        paddingVertical: height(1),
        width: width(38),
        borderRadius: width(2),
        marginTop: height(0.3),
        marginBottom: height(0.3)
    },
    textBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    whiteBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: width(80),
        borderWidth: width(0.5),
        alignSelf: "center",
        height: height(23),
        borderColor: '#F8B636',
        borderRadius: width(5),
        position: 'absolute',
        bottom: 1,
        top: height(24),

    },
    line: {
        width: width(60),
        height: 1,
        backgroundColor: AppColors.gray1,
        marginTop: height(2),
        marginBottom: height(3),
        elevation: 0,
    },
})