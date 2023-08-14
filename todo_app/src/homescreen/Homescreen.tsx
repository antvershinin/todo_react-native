import {View, Image, StyleSheet, Pressable, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homescreen}>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('TodoScreen')}>
        <Image
          style={styles.homescreen_buttons}
          source={require('./images/todo_image.png')}
        />
        <Text style={styles.text}>Todo list</Text>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('CalculatorScreen')}>
        <Image
          style={styles.homescreen_buttons}
          source={require('./images/calculator_image.png')}
        />
        <Text style={styles.text}>Calculator</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    minHeight: 200,
    minWidth: 200,
    alignItems: 'center',
  },
  homescreen_buttons: {
    height: 200,
    width: 200,
  },
  text: {
    color: 'darkgray',
    fontSize: 30,
  },
});

export default HomeScreen;
