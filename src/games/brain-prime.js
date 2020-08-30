import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const genRoundData = () => {
  const question = String(getRandomInt(0, 1000));
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => runGame(title, genRoundData);
