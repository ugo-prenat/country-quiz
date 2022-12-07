import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import { styles as genStyles } from '../../../styles/styles';
import { styles } from '../../../styles/quiz';
import PropositionBtn from './PropositionBtn';

const QuizQuestionScreen = ({ route, navigation }) => {
  const { questions } = route.params;
  const [roundId, setRoundId] = useState(1);
  const [actualQuestion, setActualQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState([]);

  console.log(actualQuestion.reponse);

  const handleAnswer = (answer) => {
    if (roundId < questions.length) {
      setAnswers([...answers, answer]);
      setActualQuestion(questions[roundId]);
      setRoundId(roundId + 1);
    } else {
      navigation.push('quizResult', { answers: [...answers, answer] });
    }
  };

  return (
    <SafeAreaView style={[genStyles.safeArea, styles.pageContainer]}>
      <Text>
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
        {actualQuestion.propositions
          .sort(() => Math.random() - 0.5) // randomize propositions
          .map((proposition) => (
            <PropositionBtn
              key={Math.random()}
              proposition={proposition}
              answer={actualQuestion.reponse}
              handleAnswer={handleAnswer}
            />
          ))}
      </View>

      <View style={styles.didYouKnowContainer}>
        <Text style={styles.didYouKnow}>Le saviez-vous ?</Text>
        <Text style={styles.didYouKnowAnecdote}>{actualQuestion.anecdote}</Text>
      </View>
    </SafeAreaView>
  );
};
export default QuizQuestionScreen;
