import React, { useMemo, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../../../styles/quiz';

const PropositionBtn = ({ proposition, answer, handleAnswer, showAnswer }) => {
  return (
    <Pressable
      style={[
        styles.button,
        styles.propositionBtn,
        {
          backgroundColor: showAnswer
            ? proposition === answer
              ? 'green'
              : 'red'
            : '#006CEA'
        }
      ]}
      onPress={() => handleAnswer(proposition === answer)}
    >
      <Text style={styles.propositionBtnText}>{proposition}</Text>
    </Pressable>
  );
};
export default PropositionBtn;
