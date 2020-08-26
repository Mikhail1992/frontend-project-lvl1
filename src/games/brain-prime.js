#!/usr/bin/env node

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

const getAnswer = (answer) => (answer ? 'yes' : 'no');

const genRoundData = () => {
  const question = getRandomInt(0, 1000);
  const answer = getAnswer(isPrime(question));

  return {
    question,
    answer,
  };
};

runGame(title, genRoundData);
