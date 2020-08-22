#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { getWelcomeUser } from './cli.js';
import { getRandomInt, isEven, getAnswer } from './utils.js';

const question = 'Answer \'yes\' if the number is even, otherwise answer \'no\'';
const rounds = 3;

const startGame = () => {
  const userName = getWelcomeUser();
  console.log(question);

  const gameIterator = (acc) => {
    if (!acc) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const randomNumber = getRandomInt(0, 20);
    console.log(`Question: ${randomNumber}`);

    const answer = getAnswer(isEven(randomNumber));
    const userAnswer = readlineSync.question('Answer: ');

    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again`,
      );
      gameIterator(rounds);
    } else {
      console.log('Correct!');
      gameIterator(acc - 1);
    }
  };

  gameIterator(rounds);
};

startGame();
