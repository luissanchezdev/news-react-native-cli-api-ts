import React from 'react'
import { View, Text, Image } from 'react-native'

function Header() {
  return (
    <View>
      <View>
      <Text>Header</Text>
    </View>
    <View>
      <Image 
        source={require('../../assets/images/logo-mars.png')}
      />
    </View>
    </View>
  )
}

export default Header