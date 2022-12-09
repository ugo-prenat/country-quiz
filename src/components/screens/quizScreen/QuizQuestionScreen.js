import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, Pressable } from 'react-native';
import { styles as genStyles } from '../../../styles/home';
import { styles } from '../../../styles/quiz';
import PropositionBtn from './PropositionBtn';

const QuizQuestionScreen = ({ route, navigation }) => {
  const { questions } = route.params;
  const [roundId, setRoundId] = useState(1);
  const [actualQuestion, setActualQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState([]);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setIsQuestionAnswered(true);
  };
  const handleNextQuestion = () => {
    setIsQuestionAnswered(false);

    if (roundId < questions.length) {
      setActualQuestion(questions[roundId]);
      setRoundId(roundId + 1);
    } else navigation.push('quizResult', { answers });
  };

  return (
    <SafeAreaView style={[genStyles.safeArea, styles.quizQuestionContainer]}>
      <View style={styles.questionWrapper}>
        <Text style={styles.questionNb}>
          Question {roundId}/{questions.length}
        </Text>
        <View style={styles.questionContainer}>
          <Image
            style={styles.image}
            source={{ uri: actualQuestion.countryFlag }}
          />
          <Text style={styles.question}>{actualQuestion.question}</Text>
        </View>

        <View>
          {actualQuestion.propositions.map((proposition) => (
            <PropositionBtn
              key={Math.random()}
              proposition={proposition}
              answer={actualQuestion.reponse}
              handleAnswer={handleAnswer}
              showAnswer={isQuestionAnswered}
            />
          ))}
        </View>
      </View>

      {isQuestionAnswered && (
        <View style={styles.hidedBottom}>
          <View style={styles.hidedBottomBtn}>
            <Pressable style={styles.button} onPress={handleNextQuestion}>
              <Text style={styles.buttonText}>
                {roundId === questions.length
                  ? 'Afficher le résultat'
                  : 'Question suivante'}
              </Text>
            </Pressable>
          </View>

          <View style={styles.didYouKnowContainer}>
            <Text style={styles.didYouKnow}>Le saviez-vous ?</Text>
            <Text style={styles.didYouKnowAnecdote}>
              {actualQuestion.anecdote}
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default QuizQuestionScreen;
