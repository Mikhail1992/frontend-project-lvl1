#!/usr/bin/env node

import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const title = 'What is the result of the expression?';

const expressions = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const getRandomExpression = () => {
  const keys = ['*', '+', '-'];
  const index = getRandomInt(0, keys.length - 1);
  return keys[index];
};

const genRoundData = () => {
  const randomNumber1 = getRandomInt(0, 20);
  const randomNumber2 = getRandomInt(0, 20);
  const operator = getRandomExpression();

  const fn = expressions[operator];
  const answer = `${fn(randomNumber1, randomNumber2)}`;

  return {
    question: `${randomNumber1} ${operator} ${randomNumber2}`,
    answer,
  };
};

runGame(title, genRoundData);
