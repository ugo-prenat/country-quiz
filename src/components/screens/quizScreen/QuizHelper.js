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
export const saveQuizResult = async (result) => {
  const quizHistoric = await AsyncStorage.getItem('quizResults');
  const newHistoric = quizHistoric
    ? JSON.parse(quizHistoric).concat([result])
    : [result];
  await AsyncStorage.setItem('quizResults', JSON.stringify(newHistoric));
};
export const getResultsHistoric = async () => {
  const quizHistoric = await AsyncStorage.getItem('quizResults');
  return quizHistoric ? JSON.parse(quizHistoric) : [];
};
