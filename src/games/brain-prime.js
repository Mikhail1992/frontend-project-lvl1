#!/usr/bin/env node

import { getRandomInt, getAnswer } from '../utils.js';
import runGame from '../index.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  const dividers = [2, 3, 5, 7];

  const hasDivider = dividers.some((item) => num % item === 0);
  return dividers.includes(num) || !hasDivider;
};

const gameCb = () => {
  const question = getRandomInt(0, 1000);
  const answer = getAnswer(isPrime(question));

  return {
    question,
    answer,
  };
};

runGame(title, gameCb);
