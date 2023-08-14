import React from 'react';

import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {useCalculator} from '../hooks/CalculatorContext';

type Props = {};

const Buttons: React.FC<Props> = props => {
  const {fillCurrent, calculate} = useCalculator();

  const getButtons = () => {
    const arr = [];

    for (let i = 1; i < 10; i++) {
      arr.push(
        <Pressable
          key={i}
          style={styles.button_item}
          onPress={() => fillCurrent(`${i}`)}>
          <Text style={styles.buttons_text}>{i}</Text>
        </Pressable>,
      );
    }
    return arr;
  };

  return (
    <View style={styles.buttons}>
      <View style={styles.buttons_numbers}>{getButtons()}</View>
      <View style={styles.button_operators}>
        <Pressable style={styles.button_item} onPress={() => fillCurrent('+')}>
          <Text style={styles.buttons_text}>+</Text>
        </Pressable>
        <Pressable style={styles.button_item} onPress={() => fillCurrent('-')}>
          <Text style={styles.buttons_text}>-</Text>
        </Pressable>
        <Pressable style={styles.button_item} onPress={() => fillCurrent('*')}>
          <Text style={styles.buttons_text}>*</Text>
        </Pressable>
        <Pressable style={styles.button_item} onPress={() => fillCurrent('/')}>
          <Text style={styles.buttons_text}>/</Text>
        </Pressable>
        <Pressable style={styles.button_item} onPress={() => calculate()}>
          <Text style={styles.buttons_text}>=</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    width: '95%',
    height: '65%',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  buttons_numbers: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },

  button_item: {
    width: '30%',
    height: '20%',
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_operators: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  buttons_text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Buttons;
