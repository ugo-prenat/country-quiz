import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, Text, View } from 'react-native';
import { styles } from '../../styles/styles';


export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://restcountries.com/v3.1/name/france');
      const json = await response.json();
      setData(json);
      console.log(json)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text>{item.title}, {item.releaseYear}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
};