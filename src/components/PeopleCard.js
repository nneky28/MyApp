import React from 'react';
import { globalStyles } from './../styles/global';
import {
    Image,
    Text, TouchableOpacity, View
} from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import Feather from 'react-native-vector-icons/Feather';




const PeopleCard = ({ item, onPressHandle }) => {
    return (
        <TouchableOpacity
            style={[globalStyles.listItemContainer]}
            onPress={onPressHandle}
        >

            <View style={CommonStyles.rowJustifySpaceBtw}>
                <View  >
                    <Image source={require('../assets/images/dummy/placeholder.png')} style={globalStyles.avatarStyle} />
                </View>

                <View style={globalStyles.textContainer}>
                    <Text style={globalStyles.titleText}>Jessica Stones</Text>
                    <Text style={globalStyles.subText}>Senior Developer</Text>

                </View>
            </View>
        </TouchableOpacity>
    );
}

export default PeopleCard;
