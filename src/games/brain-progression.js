import makeGame, { getRandomNum } from '..';


const PROGRESSION_LENGTH = 10;

const gameDescription = 'What number is missing in this progression?';

const questionGenerator = () => {
  const firstNum = getRandomNum(1, 100);
  const step = getRandomNum(1, 20);

  const makeProgression = (length, acc = [firstNum]) => {
    if (length === 0) {
      return acc;
    }
    return makeProgression(length - 1, [...acc, acc[acc.length - 1] + step]);
  };

  const progression = makeProgression(PROGRESSION_LENGTH);
  const answer = progression[getRandomNum(0, PROGRESSION_LENGTH)];
  const question = progression.join(' ').replace(answer, '..');

  return [question, answer];
};

export default makeGame(gameDescription, questionGenerator);
