import readlineSync from 'readline-sync';


const PHRASE_CORRECT = 'yes';
const PHRASE_INCORRECT = 'no';
const CORRECT_ANSWERS_TO_WIN = 3;
const MAX_DIGIT = 100;


export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};


export const acquaintance = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};


const generateBrainEvenQuestion = (maxDigit = MAX_DIGIT) => {
  const questionValue = Math.round(Math.random() * maxDigit);
  const correctAnswer = questionValue % 2 === 0 ? PHRASE_CORRECT : PHRASE_INCORRECT;
  return [questionValue, correctAnswer];
};


const gameBrainEvenIter = (correctAnswers, correctAnswersToWin) => {
  if (correctAnswers === correctAnswersToWin) {
    return true;
  }

  const [questionValue, correctAnswer] = generateBrainEvenQuestion();
  console.log(`Question: ${questionValue}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return gameBrainEvenIter(correctAnswers + 1, correctAnswersToWin);
  }

  console.log(`"${userAnswer}" is wrong answer :( Correct answer was "${correctAnswer}".`);
  return false;
};


export const gameBrainEven = (userName, correctAnswersToWin = CORRECT_ANSWERS_TO_WIN) => {
  console.log(`Answer "${PHRASE_CORRECT}" if number even otherwise answer "${PHRASE_INCORRECT}".\n`);
  const isVictory = gameBrainEvenIter(0, correctAnswersToWin);
  if (isVictory) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
