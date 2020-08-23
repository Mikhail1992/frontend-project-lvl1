#!/usr/bin/env node

import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const min = num1 < num2 ? num1 : num2;
  const max = num2 < num1 ? num1 : num2;
  const remainder = max % min;
  if (!remainder) {
    return min;
  }

  return getGCD(min, remainder);
};

const gameCb = () => {
  const randomNumber1 = getRandomInt(0, 20);
  const randomNumber2 = getRandomInt(0, 20);

  const answer = `${getGCD(randomNumber1, randomNumber2)}`;

  return {
    question: `${randomNumber1} ${randomNumber2}`,
    answer,
  };
};

runGame(question, gameCb);
