import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {StyleSheet} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import RequestsScreen from '../screens/RequestsScreen';
import LoginScreen from '../screens/LoginScreen';
import PostScreen from '../screens/PostScreen';
import MealList from '../screens/MealList';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({navigation, route}) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        labelStyle: styles.tabBarLabel,
        style: styles.tabBar,
      }}>
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <BottomTab.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          title: 'Requests',
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: 'Post',
        }}
      />
      <BottomTab.Screen name="Meals" component={MealList} />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#E07A5F',
  },
  tabBarLabel: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
