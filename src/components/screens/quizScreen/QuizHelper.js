import QUESTIONS from '../../assets/quiz/questions.json';

const NB_QUIZ_QUESTIONS = 5;

export const getQuestions = () => {
  // randomize questions and slice to get the number of questions we want
  return QUESTIONS.sort(() => Math.random() - 0.5).slice(0, NB_QUIZ_QUESTIONS);
};
