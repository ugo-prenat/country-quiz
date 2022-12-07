import React from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import { styles as genStyles } from '../../../styles/styles';
import { styles } from '../../../styles/quiz';
import { getQuestions } from './QuizHelper';

const QuizResultScreen = ({ route, navigation }) => {
  const { answers } = route.params;
  const goodAnswers = answers.filter((answer) => answer === true).length;

  return (
    <SafeAreaView style={[genStyles.safeArea, styles.pageContainer]}>
      <Text>
        Tu as eu {goodAnswers} bonnes réponse
        {goodAnswers > 1 ? 's ' : ' '}
        sur {answers.length}
      </Text>
      <Pressable
        onPress={() =>
          navigation.push('quizQuestion', { questions: getQuestions() })
        }
      >
        <Text style={styles.button}>Rejouer</Text>
      </Pressable>
      <Pressable onPress={() => navigation.push('home')}>
        <Text style={styles.button}>Revenir à l'accueil</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default QuizResultScreen;
