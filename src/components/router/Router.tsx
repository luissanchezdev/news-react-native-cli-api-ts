import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { Home } from '../../../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import DetailsScreen from '../../../screens/DetailsScreen';
import { RootStackParamList } from '../../../types/types';
import { COLORS } from '../../../constants';


const Stack = createNativeStackNavigator<RootStackParamList>()

function Router(): React.JSX.Element {

  return (
    <NavigationContainer>
      <SafeAreaView  style={ styles.container }>
        <Stack.Navigator
          initialRouteName='Home'
        >
          <Stack.Screen 
            name='Home' 
            component={Home}
            options={{ title: 'MARSNEWS' }}
          />
          <Stack.Screen 
            name='DetailsScreen'
            component={DetailsScreen}
          />
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

export default Router;