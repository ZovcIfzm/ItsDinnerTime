import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

import { createStore } from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter : 0,
  likes : 0,
  username: 'te',
  password: 'st',
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return{counter:state.counter+1}
    case 'INC_LIKES':
      return{likes:state.likes+1}
    case 'DEC_LIKES':
      return{likes:state.likes-1}
    case 'SUBMIT_CRED_USER':
      return{username:action.payload}
    case 'SUBMIT_CRED_PASS':
      return{password:action.payload}
  }
  return state
}

const store = createStore(reducer);


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store = {store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
