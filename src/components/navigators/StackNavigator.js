import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourites from '../screens/Favourites';
import Login from '../screens/Login';
import Register from '../screens/Register';
import TabNavigator from './TabNavigator';
import QuizScreen from '../screens/quizScreen/QuizScreen';
import QuizQuestionScreen from '../screens/quizScreen/QuizQuestionScreen';
import QuizResultScreen from '../screens/quizScreen/QuizResultScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={TabNavigator} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="favourites" component={Favourites} />
      <Stack.Screen name="login" component={Login} />

      <Stack.Screen name="quiz" component={QuizScreen} />
      <Stack.Screen name="quizQuestion" component={QuizQuestionScreen} />
      <Stack.Screen name="quizResult" component={QuizResultScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
