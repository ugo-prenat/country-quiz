import React, { useState, useMemo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../styles/quiz';
import { getUserQuizResults } from './QuizHelper';

const ResultHistoric = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [historic, setHistoric] = useState();

  useEffect(() => {
    const getHistoric = async () => {
      setHistoric(await getUserQuizResults());
      setIsLoading(false);
    };
    getHistoric();
  }, []);

  return (
    <View style={styles.historicContainer}>
      {!isLoading && historic.length > 0 && (
        <>
          <Text style={styles.historicTitle}>Historique des résultats</Text>
          {historic.map((item, index) => (
            <Text style={styles.historicResult} key={index}>
              {item.result}
            </Text>
          ))}
        </>
      )}
    </View>
  );
};
export default ResultHistoric;
