import { View, Text, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const TeamCard = () => {
    return (
        <View
            style={globalStyles.teamContent}
        >
            <View
                style={globalStyles.teamContainer}
            >

                <View >
                    <Image source={require('../assets/images/dummy/placeholder.png')} style={globalStyles.avatarStyle2} />
                </View>

                <View>
                    <Text style={globalStyles.textMe}>Okafor Rita</Text>
                    <Text style={globalStyles.titleText}>Senior Developer</Text>
                </View>

            </View>
        </View>
    )
}

export default TeamCard