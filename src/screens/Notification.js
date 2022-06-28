import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ScreensContainer from './../components/ScreensContainer';
import Pills from '../components/Pills';
import { globalStyles } from './../styles/global';
import { Feather } from 'react-native-vector-icons/Feather';


const Notification = ({ navigation: { navigate, toggleDrawer } }) => {
  return (

    < >
      <View style={globalStyles.header}>
        <View style={globalStyles.row}>
          {/* 
          <TouchableOpacity onPress={() => toggleDrawer()}>
            <Image source={require('../assets/images/dummy/logo.png')} style={globalStyles.iconHeader} />
            <Text style={globalStyles.iconText}>Belarus</Text>
          </TouchableOpacity> */}

        </View>
      </View>

      <View style={globalStyles.line} />
      {/* <Text>hello</Text> */}





    </>
  )
}

export default Notification