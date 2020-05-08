import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import RequestsScreen from '../screens/RequestsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator 
    initialRouteName={INITIAL_ROUTE_NAME} 
    tabBarOptions={{
      labelStyle: styles.tabBarLabel,
      style: styles.tabBar}}>
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
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Requests':
      return 'Requests';
  }
}

const styles = StyleSheet.create({
  //https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f
  tabBar:{
    backgroundColor: '#F2CC8F'
  },
  tabBarLabel:{
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})