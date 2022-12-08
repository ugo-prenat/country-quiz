import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import QuizScreen from '../screens/quizScreen/QuizScreen';
import Favourites from '../screens/Favourites';
import List from '../screens/List';
import { Icon } from '@rneui/themed';
import TestMap from '../screens/TestMap';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
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
          )
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: () => (
            <Icon type="font-awesome" name="heart" color="#000" />
          )
        }}
      />
      <Tab.Screen
        name="testMap"
        component={TestMap}
        options={{
          tabBarIcon: () => (
            <Icon type="font-awesome" name="trash-o" color="#000" />
          )
        }}
      />
      <Tab.Screen name="list" component={List} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
