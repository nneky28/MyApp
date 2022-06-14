import { View, Text, ImageBackground, TouchableOpacity, Button } from 'react-native'
import React from 'react'



const Modules = () => {
  return (
    <ImageBackground source={require('../assets/images/dummy/onboard-bg.png')} style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
      <View style={{ padding: 40, paddingVertical: 5, marginTop: 250 }}>
        <Text style={{ color: "#fff", fontSize: 40, fontWeight: "700" }}>Find a Perfect Job Match.</Text>

        <Text style={{ color: "#ccc", lineHeight: 25, fontSize: 15, fontWeight: "500", marginVertical: 20 }}>
          One place with the best jobs companies tech. Apply to all of them with a signle profile and get in touch with hiring managers directly.</Text>
      </View>
    </ImageBackground>
  )
}



export default Modules