import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const title = 'What is the result of the expression?';

const expressions = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const keys = Object.keys(expressions);

const getRandomExpression = (operations) => {
  const index = getRandomInt(0, operations.length - 1);
  return operations[index];
};

const genRoundData = () => {
  const number1 = getRandomInt(0, 20);
  const number2 = getRandomInt(0, 20);
  const operator = getRandomExpression(keys);

  const calculate = expressions[operator];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, number2));

  return {
    question,
    answer,
  };
};

export default () => runGame(title, genRoundData);
