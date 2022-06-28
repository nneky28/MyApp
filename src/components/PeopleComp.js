import React from 'react';
import { globalStyles } from './../styles/global';
import {
    Image,
    Text, TouchableOpacity, View
} from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import Feather from 'react-native-vector-icons/Feather';




const PeopleComp = ({ item, onPressHandle }) => {
    return (
        <TouchableOpacity
            style={[globalStyles.listItemContainer2]}
            onPress={onPressHandle}
        >

            <View style={CommonStyles.rowJustifySpaceBtw}>
                <View  >
                    <Image source={require('../assets/images/dummy/placeholder.png')} style={globalStyles.avatarStyle} />
                </View>

                <View style={globalStyles.textContainer}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    <Text style={globalStyles.subText}>{item.designation}</Text>

                </View>
            </View>
        </TouchableOpacity>
    );
}

export default PeopleComp;
