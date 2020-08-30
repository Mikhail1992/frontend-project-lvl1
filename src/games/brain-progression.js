import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const title = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (start, step, length) => Array(length)
  .fill()
  .map((_, index) => start + index * step);

const genRoundData = () => {
  const answerIndex = getRandomInt(0, progressionLength - 1);
  const startProgressionNumber = getRandomInt(1, 10);
  const progressionStep = getRandomInt(1, 10);
  const progression = makeProgression(
    startProgressionNumber,
    progressionStep,
    progressionLength,
  );

  const progressionClone = progression.slice();
  progressionClone[answerIndex] = '..';

  const question = progressionClone.join(' ');
  const answer = String(progression[answerIndex]);

  return {
    question,
    answer,
  };
};

export default () => runGame(title, genRoundData);
