import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import {CalculationProvider} from './hooks/CalculatorContext';

type Props = {};

const CalculatorScreen: React.FC<Props> = props => {
  return (
    <CalculationProvider>
      <SafeAreaView style={styles.calculator}>
        <Screen />
        <Buttons />
      </SafeAreaView>
    </CalculationProvider>
  );
};

const styles = StyleSheet.create({
  calculator: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: ' #2f4f4f',
  },
});

export default CalculatorScreen;
