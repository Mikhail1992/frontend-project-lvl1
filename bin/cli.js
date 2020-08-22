import readlineSync from 'readline-sync';

export function getWelcomeUser() {
  const name = readlineSync.question('May I have your name? ');

  if (!name) {
    return getWelcomeUser();
  }

  console.log(`Hello, ${name}!`);
  return name;
}

export function bootstrap() {
  console.log('Welcome to the Brain Games!');
  getWelcomeUser();
}
