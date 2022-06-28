import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import AppColors from '../styles/AppColors';
import { globalStyles } from '../styles/global';
import { width, height } from 'react-native-dimension';


const ButtonComponent = (props, style) => {


  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        padding: props.padding || 12,
        backgroundColor: props.backgroundColor || AppColors.green,
        borderRadius: props.borderRadius || 5,
        width: props.width || width(80),
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: props.marginTop,
        marginLeft: props.marginLeft,
        marginBottom: height(1),
        ...style,
      }}
    >
      <Text style={{ color: props.color || AppColors.white, fontSize: width(3) }}>{props.title}</Text>

    </TouchableOpacity>
  )
}

export default ButtonComponent