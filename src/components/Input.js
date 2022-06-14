import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";
import { globalStyles } from '../navigations/AuthScreens/Styles';



const Input = (props) => {

  return (
    <View>
      <TextInput
        style={globalStyles.input}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType || 'default'}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        blurOnSubmit={true}
        maxLength={props.maxLength}
      />
      {
        props.icon ? <TouchableOpacity onPress={props.pressHandler} style={{ alignSelf: 'flex-end', top: -35 }} >
          <Feather name={props.show ? 'eye-off' : 'eye'} size={18} color="gray" />
        </TouchableOpacity> : null
      }
    </View>
  )
}

export default Input