import readlineSync from 'readline-sync';

function getWelcomeUser() {
  const name = readlineSync.question('May I have your name? ');

  if (!name) {
    getWelcomeUser();
  } else {
    console.log(`Hello, ${name}!`);
  }
}

function getWelcomeMessage() {
  console.log('Welcome to the Brain Games!');
  getWelcomeUser();
}

export default getWelcomeMessage;
