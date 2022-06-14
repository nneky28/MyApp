import { View } from 'react-native'
import React from 'react'

const ScreensContainer = ({ children }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {children}
        </View>
    )
}

export default ScreensContainer;

