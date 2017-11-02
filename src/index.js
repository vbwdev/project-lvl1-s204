import readlineSync from 'readline-sync';


const CORRECT_ANSWERS_TO_WIN = 3;


const gameIter = (
  questionGenerator,
  answerChecker,
  correctAnswers = 0,
  correctAnswersToWin = CORRECT_ANSWERS_TO_WIN,
) => {
  if (correctAnswers === correctAnswersToWin) {
    return true;
  }

  const [question, correctAnswer] = questionGenerator();
  console.log(`Question: ${question}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const isCorrectAnswer = answerChecker(userAnswer, correctAnswer);

  if (isCorrectAnswer) {
    console.log('Correct!');
    return gameIter(
      questionGenerator,
      answerChecker,
      correctAnswers + 1,
      correctAnswersToWin,
    );
  }

  console.log(`"${userAnswer}" is wrong answer :( Correct answer was "${correctAnswer}".`);
  return false;
};


const makeGame = (gameDescription, questionGenerator, answerChecker) => () => {
  console.log('Welcome to the Brain Games!');

  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const isVictory = gameIter(questionGenerator, answerChecker);

  if (isVictory) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }

};

export default makeGame;
