import QUESTIONS from '../../assets/quiz/questions.json';
import { getUserId } from '../../asyncStorageHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const userId = await getUserId();
  const quizHistoric = await getQuizResults();
  const newHistoric = { userId, result };
  await AsyncStorage.setItem(
    'quizResults',
    JSON.stringify([...quizHistoric, newHistoric])
  );
};
export const getUserQuizResults = async () => {
  const userId = await getUserId();
  const quizHistoric = await getQuizResults();
  return quizHistoric
    .filter((result) => result.userId === userId)
    .reverse()
    .slice(0, 5);
};
export const getQuizResults = async () => {
  const quizHistoric = await AsyncStorage.getItem('quizResults');
  return quizHistoric ? JSON.parse(quizHistoric) : [];
};
