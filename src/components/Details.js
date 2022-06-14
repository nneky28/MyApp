import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Container, H1 } from '../utils/MyComponent'
import { globalStyles } from '../styles/global'
import { categoryIcon1, downIcon, filterIcon, leftIcon, listingIcon } from '../assets/images'
import CommonStyles from './../styles/CommonStyles';
import TeamCard from './TeamCard';
import { height } from 'react-native-dimension';
import { FlatList } from 'react-native-gesture-handler'

const Details = ({ route, navigation }) => {


    const [details, setDetails] = useState([])

    return (
        <View>
            <FlatList
                data={Array.from({ length: 500 })}
                renderItem={() => <View style={{ margin: height(2) }}><H1>Hi there</H1></View>}
            />
        </View>
    )
}

export default Details