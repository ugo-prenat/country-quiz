import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Favourites from "../screens/Favourites";
import Quiz from "../screens/Quiz";
import List from "../screens/List";
import { Icon } from "@rneui/themed";

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
        component={Quiz}
        options={{
          tabBarIcon: () => (
            <Icon type="font-awesome" name="question" color="#000" />
          ),
        }}
      />
      <Tab.Screen
        name="Favoris"
        component={Favourites}
        options={{
          tabBarIcon: () => (
            <Icon type="font-awesome" name="heart" color="#000" />
          ),
        }}
      />
      <Tab.Screen name="list" component={List} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
