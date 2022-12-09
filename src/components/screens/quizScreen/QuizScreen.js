import React from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import { styles as genStyles } from '../../../styles/home';
import { styles } from '../../../styles/quiz';
import { getQuestions } from './QuizHelper';

const QuizScreen = ({ navigation }) => {
  const questions = getQuestions();

  return (
    <SafeAreaView style={[genStyles.safeArea, styles.pageContainer]}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.push('quizQuestion', { questions })}
      >
        <Text style={styles.buttonText}>Commencer le quiz</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default QuizScreen;
