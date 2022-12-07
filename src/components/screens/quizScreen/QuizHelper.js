import QUESTIONS from '../../assets/quiz/questions.json';

export const getQuestions = () => {
  // randomize questions and slice to get the number of questions we want
  // then randomize propositions for each question
  return QUESTIONS.sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map((question) => ({
      ...question,
      propositions: question.propositions.sort(() => Math.random() - 0.5)
    }));
};
