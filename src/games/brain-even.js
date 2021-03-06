import makeGame, { getRandomNum } from '..';


const PHRASE_CORRECT = 'yes';
const PHRASE_INCORRECT = 'no';

const gameDescription = `Answer "${PHRASE_CORRECT}" if number even otherwise answer "${PHRASE_INCORRECT}"`;

const questionGenerator = () => {
  const question = getRandomNum(0, 100);
  const correctAnswer = question % 2 === 0 ? PHRASE_CORRECT : PHRASE_INCORRECT;
  return [question, correctAnswer];
};

export default makeGame(gameDescription, questionGenerator);
