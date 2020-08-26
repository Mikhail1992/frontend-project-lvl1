import readlineSync from 'readline-sync';

const roundsCount = 3;

const getUserName = () => readlineSync.question('May I have your name? ', {
  defaultInput: 'User',
});

const runGame = (title, genRoundData) => {
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(title);

  const runGameRound = (acc) => {
    const { question, answer } = genRoundData();
    if (!acc) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      runGameRound(acc - 1);
    }

    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again`,
    );
  };

  runGameRound(roundsCount);
};

export default runGame;
