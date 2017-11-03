import makeGame from '..';


const getRandomNum = (min, max) => min + Math.round(Math.random() * (max - min));

const getGCD = (num1, num2) => {
  if (num2 > 0) {
    return getGCD(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const questionGenerator = () => {
  const gcd = getRandomNum(2, 10);
  const num1 = gcd * getRandomNum(1, 10);
  const num2 = gcd * getRandomNum(1, 10);

  // Random may break gcd. Check it.
  const isCorrectGCD = getGCD(num1, num2) === gcd;
  if (num1 === num2 || !isCorrectGCD) {
    return questionGenerator();
  }

  return [`${num1} ${num2}`, gcd];
};

export default makeGame(gameDescription, questionGenerator);
