import makeGame, { getRandomNum } from '..';


const PHRASE_CORRECT = 'yes';
const PHRASE_INCORRECT = 'no';

const gameDescription = `Answer "${PHRASE_CORRECT}" if number prime otherwise answer "${PHRASE_INCORRECT}"`;

const isPrime = (num) => {
  const iter = (divider) => {
    if (divider === 1) {
      return true;
    }

    if (num % divider === 0) {
      return false;
    }

    return iter(divider - 1);
  };

  return iter(Math.floor(num / 2));
};

const questionGenerator = () => {
  const num = getRandomNum();
  const answer = isPrime(num) ? PHRASE_CORRECT : PHRASE_INCORRECT;
  return [num, answer];
};

export default makeGame(gameDescription, questionGenerator);
