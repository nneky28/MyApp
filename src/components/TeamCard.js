import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { height } from 'react-native-dimension';
import { Capitalize } from '../utils/Method';
import { H1 } from '../utils/MyComponent';
import { ColorList } from '../styles/AppColors';

const TeamCard = ({ item, onPressHandle }) => {
    return (
        <TouchableOpacity
            onPress={onPressHandle}
            style={globalStyles.teamContent} >
            <View style={globalStyles.avatarStyleContainer}>
                {

                    item.photo ?
                        <Image source={{ uri: item.photo }} style={globalStyles.avatarStyle} />

                        :
                        <View style={{
                            width: height(8),
                            height: height(8),
                            borderRadius: height(10),
                            alignItems: "center",
                            justifyContent: "center"
                        }} backgroundColor={ColorList[Math.floor(Math.random() * 4)]}
                        >
                            <H1>
                                {item && item.first_name && item.first_name.length > 0 ? Capitalize([...item.first_name][0]) : ""}
                                {item && item.last_name && item.first_name.length > 0 ? `${Capitalize([...item.last_name][0])}` : ""}
                            </H1>
                        </View>
                }

                <View style={globalStyles.textContainer}>
                    <Text numberOfLines={1} style={globalStyles.nameText}>
                        {item && item.first_name ? Capitalize(item.first_name) : ""} {" "}
                        {item && item.last_name ? Capitalize(item.last_name) : ""}
                    </Text>
                    <Text style={globalStyles.titleText}> {item.job && item.job.title ? Capitalize(item.job.title) : ""}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default TeamCard