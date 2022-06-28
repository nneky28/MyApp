import React from 'react';
import { globalStyles } from './../styles/global';
import {
    Image,
    Text, TouchableOpacity, View
} from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import { height } from 'react-native-dimension';
import { Capitalize } from '../utils/Method';
import { Rounded, H1 } from './../utils/MyComponent';
import { ColorList } from '../styles/AppColors';



const PeopleCard = ({ item, onPressHandle }) => {
    return (
        <TouchableOpacity
            style={[globalStyles.listItemContainer]}
            onPress={onPressHandle}
        >

            <View style={CommonStyles.rowJustifySpaceBtw}>
                {

                    item.photo ?
                        <Image source={{ uri: item.photo }} style={globalStyles.avatarStyle} />

                        :
                        <View
                            style={{
                                width: height(8),
                                height: height(8),
                                borderRadius: height(10),
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            backgroundColor={ColorList[Math.floor(Math.random() * 4)]}>
                            <H1>
                                {item && item.first_name && item.first_name.length > 0 ? Capitalize([...item.first_name][0]) : ""}
                                {item && item.last_name && item.first_name.length > 0 ? `${Capitalize([...item.last_name][0])}` : ""}
                            </H1>
                        </View>
                }

                <View style={globalStyles.textContainer}>
                    <Text style={globalStyles.titleText}>{item && item.first_name ? Capitalize(item.first_name) : ""} {" "}</Text>
                    <Text style={globalStyles.subText}>{item && item.last_name ? Capitalize(item.last_name) : ""}</Text>

                </View>
            </View>
        </TouchableOpacity>
    );
}

export default PeopleCard;
