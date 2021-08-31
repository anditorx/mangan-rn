import React from 'react';
import {Text, View} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from '../src/router';
import store from './redux/store';

import {SplashScreen, SignIn} from './screens';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
