import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/Global';


const ButtonComponent = ({ title, onPress, background = '#2898A4', style, }) => {


  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: background,
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        ...style,
      }}
    >
      <Text style={globalStyles.buttonText}>{title}</Text>

    </TouchableOpacity>
  )
}

export default ButtonComponent