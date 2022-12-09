import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { styles as genStyles } from '../../../styles/login';
import { styles } from '../../../styles/quiz';
import { getQuestions } from './QuizHelper';
import ResultHistoric from './ResultsHistoric';

const QuizScreen = ({ navigation }) => {
  const questions = getQuestions();

  return (
    <SafeAreaView style={[genStyles.safeArea, styles.pageContainer]}>
      <Text style={styles.title}>
        Testez votre culture géographique grâce à notre quiz !
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.push('quizQuestion', { questions })}
      >
        <Text style={styles.buttonText}>Commencer le quiz</Text>
      </Pressable>
      <ResultHistoric />
    </SafeAreaView>
  );
};
export default QuizScreen;
