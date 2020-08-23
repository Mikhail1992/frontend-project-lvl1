#!/usr/bin/env node

import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const title = 'What number is missing in the progression?';

const stepsCount = 10;

const getProgressionList = () => {
  const startNum = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);

  return Array(stepsCount).fill().map((_, index) => startNum + index * step);
};

const gameCb = () => {
  const answerIndex = getRandomInt(0, stepsCount - 1);
  const listOfProgression = getProgressionList();

  const answer = `${listOfProgression[answerIndex]}`;
  const question = listOfProgression.reduce((acc, num, index) => {
    if (index === answerIndex) {
      return `${acc} ..`;
    }
    return `${acc} ${num}`;
  }, '');

  return {
    question,
    answer,
  };
};

runGame(title, gameCb);
