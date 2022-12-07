import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import Quiz from '../screens/Quiz';
import List from '../screens/List';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="quiz" component={Quiz} />
      <Tab.Screen name="favourites" component={Favourites} />
      <Tab.Screen name="list" component={List} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
