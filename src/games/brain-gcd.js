import makeGame from '..';


const getRandomNum = (min, max) => min + Math.round(Math.random() * (max - min));

const checkGCD = (num1, num2, gcd) => {
  if (num2 > 0) {
    return checkGCD(num2, num1 % num2, gcd);
  }

  return Math.abs(num1) === gcd;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const questionGenerator = () => {
  const gcd = getRandomNum(1, 10);
  const num1 = gcd * getRandomNum(1, 10);
  const num2 = gcd * getRandomNum(1, 10);

  // Иногда одно из чисел становится НОД сгенерированной пары,
  // поэтому проверяем, остался ли сгенерированный НОД верным
  const isCorrectGCD = checkGCD(num1, num2, gcd);
  if (num1 === num2 || !isCorrectGCD) {
    return questionGenerator();
  }

  return [`${num1} ${num2}`, gcd];
};

const answerChecker = (userAnswer, correctAnswer) => parseInt(userAnswer, 10) === correctAnswer;

export default makeGame(gameDescription, questionGenerator, answerChecker);
