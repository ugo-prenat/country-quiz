import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../../../styles/quiz';

const PropositionBtn = ({ proposition, answer, handleAnswer }) => {
  return (
    <Pressable
      style={[styles.button, styles.propositionBtn]}
      onPress={() => handleAnswer(proposition === answer)}
    >
      <Text style={styles.propositionBtnText}>{proposition}</Text>
    </Pressable>
  );
};
export default PropositionBtn;
