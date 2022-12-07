import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import QuizScreen from '../screens/quizScreen/QuizScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="quiz" component={QuizScreen} />
      <Tab.Screen name="favourites" component={Favourites} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
