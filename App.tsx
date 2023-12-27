import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { Home } from './screens';
import { COLORS } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <SafeAreaView  style={ styles.container }>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    height: '100%'
  }
})

export default App;