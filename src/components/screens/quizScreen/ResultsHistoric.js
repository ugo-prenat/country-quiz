import React, { useEffect, useMemo } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../styles/quiz';

const ResultHistoric = () => {
  //const [historic, setHistoric] = useState([])

  const historic = useMemo(() => {
    return ['2/5 - 40%', '3/5 - 60%', '4/5 - 80%', '5/5 - 100%'];
  }, []);

  return (
    <View>
      <Text style={styles.text}>Historique des résultats</Text>
      {historic.map((result, index) => (
        <Text key={index} style={styles.text}>
          {result}
        </Text>
      ))}
    </View>
  );
};
export default ResultHistoric;
