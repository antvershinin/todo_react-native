let stackNumbers = [];
let stackOperators = [];

const priority = {
  '^': 3,
  '√': 3,
  '*': 2,
  '/': 2,
  '+': 1,
  '-': 1,
};

const operations = {
  '*': (operand1, operand2) => operand1 * operand2,
  '/': (operand1, operand2) => operand2 / operand1,
  '+': (operand1, operand2) => operand1 + operand2,
  '-': (operand1, operand2) => operand2 - operand1,
  '√': operand1 => Math.sqrt(operand1),
  '^': (operand1, operand2) => Math.pow(operand2, operand1),
};

export const makeCalculations = arr => {
  const calculateStack = () => {
    stackNumbers.push(
      operations[stackOperators.pop()](stackNumbers.pop(), stackNumbers.pop()),
    );
  };
  function calculateStackSqrt() {
    stackNumbers.push(operations[stackOperators.pop()])(stackNumbers.pop());
  }
  arr.forEach(el => {
    if (typeof el === 'number') {
      stackNumbers.push(el);
    } else {
      if (
        priority[el] > priority[stackOperators[stackOperators.length - 1]] ||
        stackOperators.length === 0
      ) {
        stackOperators.push(el);
      } else if (
        priority[el] <= priority[stackOperators[stackOperators.length - 1]]
      ) {
        do {
          el === '√' ? calculateStackSqrt() : calculateStack();
          currentOperator = stackOperators[stackOperators.length - 1];
        } while (priority[el] <= priority[currentOperator]);
        stackOperators.push(el);
      }
    }
  });

  if (stackOperators.length === 2) calculateStack();
  if (stackOperators.length === 1) calculateStack();
  return stackNumbers[0];
};
