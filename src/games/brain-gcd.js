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
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const gcd = getGCD(num1, num2);
  return [`${num1} ${num2}`, gcd];
};

export default makeGame(gameDescription, questionGenerator);
