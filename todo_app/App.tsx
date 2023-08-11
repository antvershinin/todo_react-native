import store from './src/todo/redux/store';
import {Provider} from 'react-redux';
import Todo from './src/todo/Todo';
import Calculator from './src/calculator/Calculator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Homescreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Provider store={store}>
          <Stack.Screen name="Todo" component={Todo} />
        </Provider>

        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
