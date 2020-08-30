import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const title = "Answer 'yes' if the number is even, otherwise answer 'no'";

const isEven = (num) => num % 2 === 0;

const genRoundData = () => {
  const number = getRandomInt(0, 20);

  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => runGame(title, genRoundData);
