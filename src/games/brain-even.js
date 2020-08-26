import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const title = "Answer 'yes' if the number is even, otherwise answer 'no'";

const isEven = (num) => num % 2 === 0;
const getAnswer = (answer) => (answer ? 'yes' : 'no');

const genRoundData = () => {
  const randomNumber = getRandomInt(0, 20);

  const answer = getAnswer(isEven(randomNumber));

  return {
    question: randomNumber,
    answer,
  };
};

export default () => runGame(title, genRoundData);
