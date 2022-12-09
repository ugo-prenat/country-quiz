import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import QuizScreen from '../screens/quizScreen/QuizScreen';
import Favourites from '../screens/Favourites';
import { Icon } from '@rneui/themed';
import About from "../screens/About";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: () => <Icon name="home" color="#000" /> }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          tabBarIcon: () => (
            <Icon type="font-awesome" name="question" color="#000" />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: () => (
            <Icon type="font-awesome" name="heart" color="#000" />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: () => (
            <Icon type="font-awesome" name="info" color="#000" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
