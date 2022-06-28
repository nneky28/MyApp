import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Container, H1, P } from '../../utils/MyComponent'
import AppColors from '../../styles/AppColors'
import { height, width } from 'react-native-dimension';
import { globalStyles } from './../../styles/global';
import CommonStyles from './../../styles/CommonStyles';
import Feather from 'react-native-vector-icons/Feather';
import { FontFamily } from '../../utils/FontFamily';
import BirthDayCard from './BirthDayCard';
import { ScrollView } from 'react-native-gesture-handler';


const Celeb = () => {
    const [tab, setTab] = useState('Birthday')
    return (
        <Container
            backgroundColor={'#FFFFFF'}
            width={90}
            marginTop={3}
            style={{
                // height: height(40),
                borderWidth: width(0.5),
                borderColor: AppColors.grayBorder,
                borderRadius: width(5),
                alignSelf: 'center',
                marginBottom: height(10)
            }}
        >

            <Text numberOfLines={1} style={styles.timeOffText}>
                Celebrations
            </Text>


            <View style={styles.Container}>

                {
                    ['Birthday', 'Job Anniversary'].map((item, i) => (
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




            {tab === 'Birthday' ? (
                <>
                    <View
                        style={[globalStyles.listItemContainer3]} >

                        <View style={CommonStyles.rowJustifySpaceBtw}>

                            <View  >
                                <Image source={require('../../assets/images/dummy/placeholder.png')} style={globalStyles.avatarStyle4} />
                            </View>

                            <View style={globalStyles.textContainer}>
                                <Text style={globalStyles.titleText}>Naomi's birthday is Today</Text>
                                <Text style={globalStyles.subText}>Lead Designer</Text>

                            </View>

                            <View style={styles.gift} >
                                <Feather name='gift' color={'gray'} size={20} style={globalStyles.giftIcon} />
                                <Text style={globalStyles.subText}>Oct 11</Text>
                            </View>
                        </View>
                    </View>

                    {/* upcoming  */}
                    <View style={styles.timeOffText}>
                        <H1 fontSize={4} style={CommonStyles.marginBottom_1}>Upcoming Birthdays</H1>
                        <View style={globalStyles.compLine} />
                    </View>


                    <ScrollView >
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: height(2) }}>
                            {Array.from({ length: 4 }).map((_, index) =>
                                <BirthDayCard />

                            )}
                        </View>
                    </ScrollView>
                </>
            ) : null
            }


        </Container>
    )
}

export default Celeb
const styles = StyleSheet.create({


    Container: {
        marginTop: height(2),
        flexDirection: 'row',

    },
    gift: {
        marginTop: height(2),
        marginLeft: width(20)
    },
    timeOffText: {
        marginTop: height(3),
        fontSize: width(5),
        fontFamily: "black-sans-condensed-bold",
        marginLeft: width(5)
    }

})