import makeGame from '..';


const MAX_DIGIT = 100;


const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};


const getRandomNum = (maxDigit = MAX_DIGIT) => Math.round(Math.random() * maxDigit);


const getRandomElement = array => array[Math.floor(Math.random() * array.length)];


const gameDescription = 'What is the result of the expression?';


const questionGenerator = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum(10);
  const operation = getRandomElement(Object.keys(operations));
  const correctAnswer = operations[operation](num1, num2);
  return [`${num1} ${operation} ${num2}`, correctAnswer];
};


const answerChecker = (userAnswer, correctAnswer) => parseInt(userAnswer, 10) === correctAnswer;


export default makeGame(gameDescription, questionGenerator, answerChecker);
