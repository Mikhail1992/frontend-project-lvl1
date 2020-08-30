import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const title = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGCD(b, a % b);
};

const genRoundData = () => {
  const number1 = getRandomInt(0, 20);
  const number2 = getRandomInt(0, 20);

  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));

  return {
    question,
    answer,
  };
};

export default () => runGame(title, genRoundData);
