import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants'


function TodayApod ({ title, image, date, url } : {title : string, image : string, date : string, url : string}) {
  return (
    <TouchableOpacity 
      style={ styles.container }
      onPress={() => console.log('press button') }
    >
      <View style={ styles.containerImage}>
        <Image 
          source={{ uri: url }}
          style={ styles.image }
        />
      </View>
      <Text 
        style={ styles.title }
        numberOfLines={2}  
      >{ title }</Text>
      <Text style={ styles.date }>{ date }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    padding: 4,
    backgroundColor: COLORS.maroonDark,
    borderRadius: SIZES.xLarge
  },
  containerImage : {
    height: 250,
    width: '100%',
    alignItems: 'center',
    padding: 2,
    borderRadius: SIZES.xLarge
  },
  image: {
    width: '90%',
    height: '95%',
    borderRadius: SIZES.xLarge,
    borderColor: COLORS.lightWhite,
    borderWidth: 2
  },
  title:{
    textAlign: 'center',
    color: COLORS.lightWhite,
    fontFamily: FONTS.semibold,
    fontSize: SIZES.large    
  },
  description:{

  },
  date:{
    textAlign: 'center',
    color: COLORS.lightWhite,
    fontFamily: FONTS.regular,
    fontSize: SIZES.medium
  }
})

export default TodayApod