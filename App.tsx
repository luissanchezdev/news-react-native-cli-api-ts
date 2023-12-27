import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { Home } from './screens';
import { COLORS } from './constants';


function App(): React.JSX.Element {

  return (
    <SafeAreaView  style={ styles.container }>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    height: '100%'
  }
})

export default App;