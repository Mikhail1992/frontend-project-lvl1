#!/usr/bin/env node

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
  const randomNumber1 = getRandomInt(0, 20);
  const randomNumber2 = getRandomInt(0, 20);

  const answer = `${getGCD(randomNumber1, randomNumber2)}`;

  return {
    question: `${randomNumber1} ${randomNumber2}`,
    answer,
  };
};

runGame(title, genRoundData);
