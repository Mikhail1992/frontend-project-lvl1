export const getRandomInt = (startNum, endNum) => startNum + Math
  .floor(Math.random() * (endNum - startNum + 1));

export const getAnswer = (answer) => (answer ? 'yes' : 'no');

export default {};
