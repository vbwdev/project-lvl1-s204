import makeGame, { getRandomNum } from '..';


const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const gameDescription = 'What is the result of the expression?';

const questionGenerator = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum(1, 10);
  const operation = getRandomElement(Object.keys(operations));
  const correctAnswer = operations[operation](num1, num2);
  return [`${num1} ${operation} ${num2}`, correctAnswer];
};

export default makeGame(gameDescription, questionGenerator);
