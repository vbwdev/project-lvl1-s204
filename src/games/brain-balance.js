import makeGame from '..';


const getRandomNum = (min, max) => min + Math.round(Math.random() * (max - min));

const gameDescription = 'Balance the given number.';

const getBalanceNum = (num) => {
  const digitsSum = num.toString().split('').reduce((acc, value) => acc + parseInt(value, 10), 0);
  const digitsCount = num.toString().length;
  const balanceBase = Math.floor(digitsSum / digitsCount);
  const balanceRest = digitsSum % balanceBase;

  const iter = (rest, count, acc) => {
    if (count === 0) {
      return acc;
    }
    const digit = rest > 0 ? balanceBase + 1 : balanceBase;
    return iter(rest - 1, count - 1, `${digit}${acc}`);
  };

  return iter(balanceRest, digitsCount, '');
};

const questionGenerator = () => {
  const num = getRandomNum(100, 1000);
  const answer = getBalanceNum(num);
  return [num, answer];
};


export default makeGame(gameDescription, questionGenerator);
