import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {useCalculator} from '../hooks/CalculatorContext';

type Props = {};

const Screen: React.FC<Props> = props => {
  const {expression, current} = useCalculator();

  return (
    <View style={styles.screen}>
      <View style={styles.screen_secondary}>
        <Text style={styles.screen_text}>{expression}</Text>
      </View>
      <View style={styles.screen_main}>
        <Text style={styles.screen_text}>{current}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '95%',
    height: '25%',
    borderStyle: 'solid',
    borderWidth: 3,
    marginTop: 25,
  },
  screen_main: {
    height: '70%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  screen_secondary: {
    height: '30%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  screen_text: {
    fontSize: 30,
  },
});

export default Screen;
