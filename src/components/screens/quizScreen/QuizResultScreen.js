import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { styles as genStyles } from '../../../styles/home';
import { styles } from '../../../styles/quiz';
import { getQuestions } from './QuizHelper';

const QuizResultScreen = ({ route, navigation }) => {
  const { answers } = route.params;
  const goodAnswers = answers.filter((answer) => answer === true).length;
  const percentWin = Math.round((goodAnswers / answers.length) * 100);

  return (
    <SafeAreaView style={[genStyles.safeArea, styles.pageContainer]}>
      <Text style={styles.quizResultText}>
        {percentWin > 50 ? 'Bravo !' : 'Dommage...'}
      </Text>
      <Text style={styles.quizResultText}>
        Tu as eu {goodAnswers} bonnes réponse
        {goodAnswers > 1 ? 's ' : ' '}
        sur {answers.length}
      </Text>

      <View style={styles.resultBtns}>
        <Pressable
          style={[styles.button, styles.replayBtn]}
          onPress={() =>
            navigation.push('quizQuestion', { questions: getQuestions() })
          }
        >
          <Text style={[styles.buttonText, styles.replayBtnText]}>Rejouer</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.push('home')}
        >
          <Text style={styles.buttonText}>Revenir à l'accueil</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default QuizResultScreen;
