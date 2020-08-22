export const getRandomInt = (startNum, endNum) => {
  return startNum + Math.floor(Math.random() * (endNum - startNum + 1));
};

export const isEven = (num) => num % 2 === 0;

export const getAnswer = (answer) => (answer ? "yes" : "no");
