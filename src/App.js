import React from 'react';
import {Text, View} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from '../src/router';
import store from './redux/store';
import {SplashScreen, SignIn} from './screens';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
        <FlashMessage position="bottom" />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
