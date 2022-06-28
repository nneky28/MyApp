import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Container, EmptyStateWrapper, PageLoader } from '../../utils/MyComponent'
import AppColors from '../../styles/AppColors'
import { height, width } from 'react-native-dimension';
import { ColorList } from './../../styles/AppColors';
import { FontFamily } from '../../utils/FontFamily';
import { rightIcon, twoMenIcon } from '../../assets/images';
import Button from './Button';
import { Images } from './../../utils/Images';
import { Capitalize } from '../../utils/Method';

const Benefit = ({ item, horizontal, data }) => {
    const [benefits, setBenefits] = useState(null)
    const [loading, setLoading] = useState(false)



    return (
        <Container
            backgroundColor={ColorList[Math.floor(Math.random() * 4)]}
            width={90}
            marginTop={3}
            style={{
                borderWidth: width(0.5),
                borderColor: AppColors.grayBorder,
                borderRadius: width(5),
                alignSelf: 'center',
                marginRight: width(3),

            }}
        >

            <View style={[styles.container, !horizontal && { width: width(90) }]}>
                <View style={[styles.row, styles.between]}>
                    <Container width={50} backgroundColor={"transparent"}>
                        <View style={styles.row}>
                            <Text style={styles.text}>{item && item.plan ? Capitalize(item.plan) : ""}</Text>
                        </View>
                        <Text style={styles.text1}>{item && item.provider ? Capitalize(item.provider) : ""}</Text>
                    </Container>
                    <Button
                        title="Visit Website"
                        textStyle={styles.buttonText}
                        containerStyle={styles.button}
                    />
                </View>
                <View style={styles.line} />
                <View style={[styles.row, styles.between, styles.margin1]}>

                    <View>
                        <Text style={styles.ttext1}>Type</Text>
                        <Text style={styles.ttext}>{item && item.category ? Capitalize(item.category) : ""}</Text>
                    </View>
                    {
                        item && item.category !== "pension" ? <View style={styles.row}>
                            <Image
                                resizeMode="contain"
                                source={twoMenIcon}
                                style={[styles.icon, styles.margin2]}
                            />
                            <Text style={styles.text1}>{item && item.num_dependants ? item.num_dependants : 0} Dependents</Text>
                        </View> : null
                    }

                </View>
            </View>


        </Container>
    )
}



export default Benefit


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
    text: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
    },
    text1: {
        fontSize: width(3.1),
        color: AppColors.black1,
        marginVertical: height(0.5),
        fontFamily: "black-sans-condensed-Light",
    },
    ttext: {
        fontSize: width(3.1),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
    },
    ttext1: {
        fontSize: width(2.6),
        color: AppColors.black1,
        marginVertical: height(0.5),
        fontFamily: "black-sans-condensed-Light",
    },
    container: {

        borderRadius: 20,
        paddingVertical: height(1.5),
        paddingHorizontal: width(3),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    between: { justifyContent: 'space-between' },
    margin: {
        width: width(5),
    },
    margin1: {
        marginTop: height(1),
    },
    margin2: {
        marginRight: width(2),
    },
    flatList: {
        paddingHorizontal: width(5),
        paddingVertical: height(2),
    },

    button: {
        margin: 0,
        backgroundColor: AppColors.black1,
        paddingVertical: height(0.7),
        alignSelf: 'flex-start',
        width: '33%',
    },
    buttonText: {
        fontSize: width(2.9),
        fontFamily: "black-sans-Regular",
    },
    icon: {
        width: width(3.5),
        height: width(3.5),
        tintColor: AppColors.black1,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#8DADFF',
        marginTop: height(1),
        elevation: 0,
    },
})