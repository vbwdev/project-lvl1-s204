import makeGame, { getRandomNum } from '..';


const gameDescription = 'What number is missing in this progression?';

const questionGenerator = () => {
  const num = getRandomNum(100, 1000);
  const answer = '';
  return [num, answer];
};

export default makeGame(gameDescription, questionGenerator);
