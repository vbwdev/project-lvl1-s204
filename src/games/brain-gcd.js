import makeGame, { getRandomNum } from '..';


const getGCD = (num1, num2) => {
  if (num2 > 0) {
    return getGCD(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const questionGenerator = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const gcd = getGCD(num1, num2);
  return [`${num1} ${num2}`, gcd];
};

export default makeGame(gameDescription, questionGenerator);
