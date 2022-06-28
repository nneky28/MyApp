import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontFamily } from '../../utils/FontFamily'
import AppColors from '../../styles/AppColors'
import { width, height } from 'react-native-dimension';
import Active from './Active';
import Balance from './Balance';
import Request from './Request';
import { EmptyStateWrapper, PageLoader } from './../../utils/MyComponent';
import { useQuery } from 'react-query';
import { APIFunction } from './../../utils/MyApi';

const Timeoff = () => {


    const [index, setIndex] = useState('Active')

    return (
        <React.Fragment>
            <View style={styles.threeButtonCont}>
                {
                    ['Active', 'Available', 'Requests'].map((item, i) => (
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.8}
                            key={i}
                            onPress={() => {
                                setIndex(item)
                            }}
                        >
                            <Text style={[styles.buttonText, index == item && styles.selected]}>{item}</Text>
                            {index == item && <View style={styles.animatedView} />}

                        </TouchableOpacity>
                    ))
                }

            </View>

            <View style={styles.activeBox}>
                {
                    index === 'Active' ? (Array.from({ length: 2 }).map(() => (<Active />))) : null
                }
            </View>

            <View style={styles.activeBox}>
                {
                    index === 'Available' ? (Array.from({ length: 2 }).map(() => (<Balance />))) : null
                }
            </View>

            <View style={styles.activeReq}>

                {
                    index === 'Requests' ? (<Request />) : null
                }
            </View>

        </React.Fragment>
    )
}

export default Timeoff

const styles = StyleSheet.create({

    buttonText: {
        fontSize: width(3.3),
        color: AppColors.black,
        fontFamily: "black-sans-condensed-Regular",
    },

    threeButtonCont: {
        width: width(90),
        alignSelf: 'center',
        marginTop: height(2),
        borderWidth: 1,
        borderColor: AppColors.grayBorder,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: height(5.5),
        alignItems: 'center',
        position: 'relative'
    },
    button: {
        width: '33%',
        alignItems: 'center'
    },

    animatedView: {
        width: width(29.5),
        backgroundColor: AppColors.blue4,
        height: height(5.3),
        marginTop: height(1),
        position: 'absolute',
        left: 0,
        borderRadius: 20,
        top: -18,
        zIndex: -1

    },
    selected: {
        fontSize: width(3.4),
        color: AppColors.green,
        fontFamily: "black-sans-condensed-SemiBold",
    },
    activeBox: {
        flexDirection: 'row',
        marginLeft: width(3.7)
    },
    activeReq: {
        marginRight: width(33)
    }

});
