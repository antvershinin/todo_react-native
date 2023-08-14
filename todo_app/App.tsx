import CalculatorScreen from './src/calculator/CalculatorScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/homescreen/Homescreen';
import TodoScreen from './src/todo/TodoScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Home'}}
        />

        <Stack.Screen
          name="TodoScreen"
          component={TodoScreen}
          options={{title: 'To Do List'}}
        />

        <Stack.Screen
          name="CalculatorScreen"
          component={CalculatorScreen}
          options={{title: 'Calculator'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
