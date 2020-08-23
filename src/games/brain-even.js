#!/usr/bin/env node

import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const question = 'Answer \'yes\' if the number is even, otherwise answer \'no\'';

const isEven = (num) => num % 2 === 0;
const getAnswer = (answer) => (answer ? 'yes' : 'no');

const gameCb = () => {
  const randomNumber = getRandomInt(0, 20);

  const answer = getAnswer(isEven(randomNumber));

  return {
    question: randomNumber,
    answer,
  };
};

runGame(question, gameCb);
