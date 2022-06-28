import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Container, H1, ProfileLoader, Rounded } from '../utils/MyComponent'
import { globalStyles } from '../styles/global'
import { categoryIcon1, downIcon, filterIcon, leftIcon, listingIcon } from '../assets/images'
import CommonStyles from './../styles/CommonStyles';
import TeamCard from './TeamCard';
import { height, width } from 'react-native-dimension';
import { FlatList } from 'react-native-gesture-handler'
import PeopleCard from './PeopleCard';
import PeopleComp from './PeopleComp';
import ContactModal from './ContactModal'
import { Capitalize, getData, storeData } from './../utils/Method';
import { APIFunction } from '../utils/Api'
import { getAPIs } from './../utils/Api';
import { ColorList } from './../styles/AppColors';
import { FontFamily } from '../utils/FontFamily'
import moment from 'moment'

const Details = ({ route, navigation, item }) => {
    const [modal, setModal] = useState(false);
    const [details, setDetails] = useState(null)
    const [member, setMember] = useState(null)
    const [loading, setLoading] = useState(true)
    const [members, setMembers] = useState([]);


    const getProfile = async () => {
        try {
            const member = await getData("tmember");
            setLoading(true);
            let token = await getData("token");
            let user = await getData("user");
            let about_me = await getData("about_me")
            let biz = user.employee_user_memberships &&
                Array.isArray(user.employee_user_memberships) && user.employee_user_memberships[0]
                && user.employee_user_memberships[0].business_id ? user.employee_user_memberships[0] : null;
            let url = APIFunction.team_members(biz.business_id, member.id);
            let detail_url = APIFunction.basic_details(biz.business_id, member.id);
            console.log("url<<<", url)
            let res = await getAPIs(url, token);
            let detail_res = await getAPIs(detail_url, token);
            let members = res && res.results && Array.isArray(res.results) ? res.results : [];
            setMembers(members)
            console.log("members---", detail_res, members)
            setMember({ ...member, ...detail_res });
            setLoading(false);
        } catch (err) {
            console.log("member---", err)
            let msg = err.msg && err.msg.detail && typeof (err.msg.detail) == "string" ? err.msg.detail : "Something went wrong. Please retry"
            ToastError(msg)
        }
    }
    useEffect(() => {
        getProfile();
    }, [])

    return (
        <Container>
            <View style={globalStyles.detailsContainer}>
                <View style={globalStyles.header2}>
                    <TouchableOpacity onPress={() => navigation.navigate('People')} style={CommonStyles.paddingLeft_1}>
                        <Image resizeMode="contain" source={leftIcon} style={globalStyles.leftIcon} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={globalStyles.screenDetails}>
                        {`${member && member.first_name ? Capitalize(member.first_name) : ""} ${member && member.last_name ? Capitalize(member.last_name) : ""}`}
                    </Text>
                </View>
                {/* hr */}
                <View style={globalStyles.line2} />
                {
                    loading ? (
                        <View style={{
                            alignItems: "center",
                            justifyContent: "center", flex: 1,
                            marginTop: "20%"
                        }}>
                            <ProfileLoader />
                        </View>

                    ) : (
                        <ScrollView style={{ marginBottom: 30 }}>
                            <View>
                                <View style={globalStyles.userInfo} >

                                    {
                                        member && member.photo ? (
                                            <Image
                                                source={{ uri: member.photo }}
                                                style={globalStyles.avatarStyle}
                                            />
                                        ) : (
                                            <View style={{

                                                width: height(10),
                                                height: height(10),
                                                borderRadius: height(10),
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }} backgroundColor={ColorList[Math.floor(Math.random() * 4)]}
                                            >
                                                <H1>
                                                    {member && member.first_name && member.first_name.length > 0 ? Capitalize([...member.first_name][0]) : ""}
                                                    {member && member.last_name && member.first_name.length > 0 ? `${Capitalize([...member.last_name][0])}` : ""}
                                                </H1>
                                            </View>
                                        )
                                    }
                                </View>

                                <View style={{ marginTop: 20, alignItems: 'center' }}>
                                    <Text numberOfLines={1} style={[globalStyles.nameText, CommonStyles.marginTop_1]}>
                                        {`${member && member.job && member.job.title ? Capitalize(member.job.title) : ""}`}
                                    </Text>
                                    <Text numberOfLines={1} style={[globalStyles.designationText, { fontFamily: FontFamily.BlackSansBold }]}>
                                        {member && member.type ? Capitalize(member.type.replace("_", " ")) : ""} | {member && member.hire_date ? Capitalize(moment(member.hire_date).fromNow().replace("ago", "")) : ""}
                                    </Text>
                                </View>
                            </View>

                            <View>
                                <TouchableOpacity style={globalStyles.detailsButton} onPress={() => setModal(true)}>
                                    <Text style={{ textAlign: 'center' }}>Contact</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={globalStyles.reportContainer}>
                                <Text style={globalStyles.report}>Report to</Text>

                                <PeopleComp item={
                                    {
                                        key: '1',
                                        title: 'Joseph Ikemba',
                                        designation: 'Junior Developer',

                                    }
                                } />
                            </View>



                            <View style={globalStyles.reportContainer}>
                                <Text style={globalStyles.report2}>Team</Text>

                                <FlatList
                                    data={members}
                                    horizontal
                                    keyExtractor={(item) => item.key}
                                    renderItem={({ item }) => (
                                        <TeamCard
                                            item={item}
                                            onPressHandle={async () => {
                                                storeData("tmember", item)
                                                getProfile()
                                            }}
                                            containerStyle={globalStyles.horizontalListContainer}
                                            titleStyle={globalStyles.headingText}
                                            subtitleStyle={globalStyles.subText}
                                        />
                                    )
                                    }
                                    ItemSeparatorComponent={() => <View style={[CommonStyles.marginRight_2]} />}
                                    showsHorizontalScrollIndicator={false}
                                    nestedScrollEnabled={true}
                                    contentContainerStyle={[CommonStyles.marginBottom_5]}
                                />
                            </View>

                        </ScrollView>

                    )
                }


            </View>
            <ContactModal isVisible={modal} onHide={() => setModal(false)} data={member} />
        </Container>

    )
}

export default Details