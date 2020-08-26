import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ', {
  defaultInput: 'User',
});

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
};
