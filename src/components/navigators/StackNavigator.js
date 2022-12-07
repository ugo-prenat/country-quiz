import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Quiz from '../screens/Quiz';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="tabNav"
    >
      <Stack.Screen name="tabNav" component={TabNavigator} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="favourites" component={Favourites} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="quiz" component={Quiz} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
