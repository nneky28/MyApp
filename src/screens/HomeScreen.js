import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import ScreenWrap from './../components/ScreenWrap';
import Clock from './../components/dashboard/Clock';
import Feather from 'react-native-vector-icons/Feather';
import { globalStyles } from './../styles/global';
import CommonStyles from './../styles/CommonStyles';
import ButtonComponent from '../components/ButtonComponent';
import styles from './../components/dashboard/Styles';
import Container from './../components/Container';
import AnimatedView from './../components/AnimatedView/index';
import Out from '../components/dashboard/Out';
import Celeb from './../components/dashboard/Celeb';
import Timeoff from '../components/dashboard/Timeoff';
import Benefit from '../components/dashboard/Benefit';
import { height, width } from 'react-native-dimension';
import { ColorList } from './../styles/AppColors';
import Assets from './../components/dashboard/Assets';
import { rightIcon } from '../assets/images';
import Todo from './../components/dashboard/Todo';
import { EmptyStateWrapper, H1 } from '../utils/MyComponent';
import { Images } from './../utils/Images';
import { PageLoader } from './../utils/MyComponent';
import { useQuery } from 'react-query';
import { APIFunction } from './../utils/MyApi';


const HomeScreen = ({ navigation: { navigate, toggleDrawer } }) => {
    const [category, setCategory] = useState(null)

    const { status, data } = useQuery('benefits', () => APIFunction.get_benefits())
    // console.log('benefit data', data, status)


    const { status: state, data: assets } = useQuery('assets', () => APIFunction.get_assets())
    // console.log('assets data->', assets, state)

    const { data: out, status: outStatus } = useQuery('outs', { category }, () => APIFunction.get_outs(category))

    console.log('Those out--->>', out)

    return (
        <View>
            <View style={globalStyles.header}>
                <TouchableOpacity onPress={() => toggleDrawer()} style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }} >
                    <Image source={require('../assets/images/dummy/logo.png')} style={globalStyles.leftIcon} />
                    <Text style={globalStyles.iconText}>Torilo Academy</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="help-circle" size={25} color={'black'} style={globalStyles.headerIcon} />
                </TouchableOpacity>
            </View>
            <View style={globalStyles.line} />

            <ScrollView>
                <ScrollView horizontal={false} >
                    <Clock />
                </ScrollView>


                <ButtonComponent
                    backgroundColor={'#F8B636'}
                    title='Clock In'
                    style={{ textAlign: 'center' }}
                    borderRadius={8}

                />

                {/* todo section  */}

                <View style={styles.toDoContainer}>
                    <View style={styles.row1}>
                        <Text numberOfLines={1} style={styles.text3}>
                            To do
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.8}

                            style={styles.row}>
                            <Text style={styles.text4}>See all task</Text>
                            <Image
                                resizeMode="contain"
                                source={rightIcon}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                    {
                        Array.from({ length: 2 }).map((___, index) => (
                            <Todo />
                        ))
                    }
                </View>
                {/* threetabs  */}
                <View style={CommonStyles.marginTop_4}>
                    <Text numberOfLines={1} style={styles.timeOffText}>
                        Time Off
                    </Text>
                </View>

                <Timeoff />
                <View style={styles.row2}>
                    <H1 fontSize={4} >See all time off</H1>
                    <Image
                        resizeMode="contain"
                        source={rightIcon}
                        style={styles.icon1}
                    />
                </View>
                {/* ends here  */}

                {/* Assets  */}
                <View style={CommonStyles.marginTop_4}>
                    <Text numberOfLines={1} style={styles.timeOffText}>
                        Assets(2)
                    </Text>


                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: width(4.3) }} >
                            {Array.from({ length: 8 }).map((_, index) =>
                                <Assets />

                            )}
                        </View>
                    </ScrollView>



                    {/* <FlatList
                        data={data?.results}
                        horizontal
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Benefit item={item}

                                containerStyle={globalStyles.horizontalListContainer}
                                titleStyle={globalStyles.headingText}
                                subtitleStyle={globalStyles.subText}
                            />
                        )
                        }
                        ItemSeparatorComponent={() => <View style={[CommonStyles.marginRight_2]} />}
                        showsHorizontalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        contentContainerStyle={[CommonStyles.marginLeft_5]}
                    /> */}

                </View>

                {/* benefit  */}

                {
                    status === 'loading' ? (
                        <PageLoader />
                    ) : null
                }
                {
                    !status === 'loading' && data.results && Array.isArray(data.results) && data.results.length === 0 ? (
                        <EmptyStateWrapper
                            icon={Images.EmptyBenefits}
                            header_1={"You have no active"}
                            header_2={"benefits yet."}
                            sub_text={"When you do, they will show up here."}
                        />
                    ) : null
                }

                <View >
                    <Text numberOfLines={1} style={styles.timeOffText}>
                        Benefit
                    </Text>


                    <FlatList
                        data={data?.results}
                        horizontal
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Benefit item={item}

                                containerStyle={globalStyles.horizontalListContainer}
                                titleStyle={globalStyles.headingText}
                                subtitleStyle={globalStyles.subText}
                            />
                        )
                        }
                        ItemSeparatorComponent={() => <View style={[CommonStyles.marginRight_2]} />}
                        showsHorizontalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        contentContainerStyle={[CommonStyles.marginLeft_5]}
                    />


                </View>

                {/* who's out  */}
                <View style={CommonStyles.marginTop_4}>
                    <Out />
                </View>

                {/* celebration section  */}

                <View style={CommonStyles.marginTop_4}>
                    <Celeb />
                </View>

            </ScrollView>
        </View>
    )
}
export default HomeScreen
