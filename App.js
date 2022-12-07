import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/components/navigators/StackNavigator';
import Home from './src/components/screens/Home';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default App;
