import readlineSync from "readline-sync";

export function getWelcomeMessage() {
  console.log("Welcome to the Brain Games!");
  getWelcomeUser();
}

function getWelcomeUser() {
  const name = readlineSync.question("May I have your name? ");

  if (!name) return getWelcomeUser();

  console.log(`Hello, ${name}!`);
}
