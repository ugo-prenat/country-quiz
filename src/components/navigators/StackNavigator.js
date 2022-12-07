import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourites from '../screens/Favourites';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Quiz from '../screens/Quiz';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="register"
    >
      <Stack.Screen name="home" component={TabNavigator} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="favourites" component={Favourites} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="quiz" component={Quiz} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
