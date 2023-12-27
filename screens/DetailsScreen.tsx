import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { COLORS } from "../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black
  }
})

function DetailsScreen() {
  return (
    <View style={ styles.container }>
      <Text>Details Screen</Text>
    </View>
  )
}

export default DetailsScreen