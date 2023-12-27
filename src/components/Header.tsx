import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Images, FONTS, COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    alignItems: 'flex-start',
  },
  rightContainer: {
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.xLarge,
    color: COLORS.red,
    textTransform: 'uppercase'
  },
  title_2: {
    color: COLORS.lightWhite
  },
  logo: {
    width: 48,
    height: 48
  }
})

function Header() {
  return (
    <View style={ styles.container }>
      <View style={ styles.leftContainer}>
        <Text style={ styles.title }>Mars<Text style={ styles.title_2 }>News</Text></Text>
      </View>
      <View style={ styles.rightContainer }>
        <Image 
          source={require('../../assets/images/logo-mars.png')}
          style={ styles.logo }
        />
      </View>
    </View>
  )
}

export default Header