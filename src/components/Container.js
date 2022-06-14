import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const Container = ({ children }) => {
  return (
    <View style={globalStyles.container}>
      {children}
    </View>
  )
}

export default Container                            