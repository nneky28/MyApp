import { View, Text, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { Container, H1 } from '../../utils/MyComponent'
import AppColors from '../../styles/AppColors'
import { height, width } from 'react-native-dimension';
import { globalStyles } from './../../styles/global';
import { FontFamily } from '../../utils/FontFamily';
import OutCard from './OutCard';

const Out = () => {
    const [tab, setTab] = useState('Leave')
    return (
        <Container
            backgroundColor={'#FFFFFF'}
            width={90}
            style={{
                // height: height(30),
                borderWidth: width(0.5),
                borderColor: AppColors.grayBorder,
                borderRadius: width(5),
                alignSelf: 'center',
                position: 'relative',

            }}
        >
            <Text numberOfLines={1} style={styles.timeOffText}>
                Who's Out
            </Text>
            <View style={styles.Container}>

                {
                    ['Leave', 'Remote Work', 'Training'].map((item, i) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            key={i}
                            onPress={() => {
                                setTab(item)
                            }}
                        >
                            <Text style={[globalStyles.heading, tab == item && globalStyles.selectedHeading]}>{item}</Text>
                            {tab == item && <View style={globalStyles.animated2} />}
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={globalStyles.compLine} />
            {
                tab === 'Leave' ?

                    <ScrollView >
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: height(2) }}>
                            {Array.from({ length: 4 }).map((_, index) =>
                                <OutCard />

                            )}
                        </View>
                    </ScrollView> : null
            }

            <View style={globalStyles.outFooter}>
                <H1>View all</H1>
            </View>
        </Container>
    )
}

export default Out
const styles = StyleSheet.create({


    Container: {
        marginTop: height(2),
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    timeOffText: {
        marginTop: height(3),
        fontSize: width(5),
        fontFamily: "black-sans-condensed-bold",
        marginLeft: width(5)
    }

})