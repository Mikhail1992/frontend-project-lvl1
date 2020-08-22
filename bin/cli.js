import readlineSync from 'readline-sync';

export function getWelcomeUser() {
  const name = readlineSync.question('May I have your name? ');

  if (!name) {
    return getWelcomeUser();
  }

  console.log(`Hello, ${name}!`);
  return name;
}

export function bootstrap(question, gameCb) {
  console.log('Welcome to the Brain Games!');
  const userName = getWelcomeUser();

  if (question) {
    console.log(question);
  }

  if (gameCb) {
    gameCb(userName);
  }
}
