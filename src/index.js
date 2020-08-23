import readlineSync from 'readline-sync';

import { getWelcomeUser } from './bin/cli.js';

const rounds = 3;

const runGame = (title, gameCb) => {
  const userName = getWelcomeUser();
  console.log(title);

  const gameIterator = (acc) => {
    const { question, answer } = gameCb();
    if (!acc) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Answer: ');

    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again`,
      );
    } else {
      console.log('Correct!');
      gameIterator(acc - 1);
    }
  };

  gameIterator(rounds);
};

export default runGame;
