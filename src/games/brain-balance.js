import makeGame, { getRandomNum } from '..';


const gameDescription = 'Balance the given number.';

const getBalanceNum = (num) => {
  const digitsSum = num.toString().split('').reduce((acc, value) => acc + parseInt(value, 10), 0);
  const digitsCount = num.toString().length;
  const balanceBase = Math.floor(digitsSum / digitsCount);
  const balanceRest = digitsSum % digitsCount;
  const baseNum = parseInt(balanceBase.toString().repeat(digitsCount), 10);
  const restNum = parseInt('1'.repeat(balanceRest), 10) || 0;
  return baseNum + restNum;
};

const questionGenerator = () => {
  const num = getRandomNum(100, 1000);
  const answer = getBalanceNum(num);
  return [num, answer];
};

export default makeGame(gameDescription, questionGenerator);
