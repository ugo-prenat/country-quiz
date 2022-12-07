import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Quiz from '../screens/Quiz';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Quiz" component={Quiz} />
      <Tab.Screen name="Favoris" component={Favourites} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
