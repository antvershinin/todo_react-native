import React, {useContext, useState} from 'react';
import {makeCalculations} from './Calculations';

const operandKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operatorKeys = ['*', '/', '^', '+', '-', '√'];

const CalculationContext = React.createContext<{
  fillCurrent: (n: string) => void;
  expression: (string | number)[];
  current: string;
  calculate: () => void;
}>(null!);

let operatorCheck: string[] = [];

export const CalculationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [expression, setExpression] = useState<(string | number)[]>([]);
  const [current, setCurrent] = useState('');

  const fillCurrent = (n: string) => {
    if (operandKeys.includes(n)) {
      if (operatorCheck.length) {
        setExpression([...expression, current]);
        operatorCheck = [];
        setCurrent('');
        setCurrent(n);
      } else {
        setCurrent(`${current + n}`);
      }
    }
    if (operatorKeys.includes(n)) {
      if (!operatorCheck.length) {
        setExpression([...expression, +current]);
      }
      operatorCheck[0] = n;
      setCurrent(n);
    }
  };

  const calculate = () => {
    const newExpresson = [...expression, +current];
    setExpression(newExpresson);
    setCurrent(makeCalculations(newExpresson));
  };

  const value = {expression, fillCurrent, current, calculate};
  return (
    <CalculationContext.Provider value={value}>
      {children}
    </CalculationContext.Provider>
  );
};

export const useCalculator = () => {
  return useContext(CalculationContext);
};
