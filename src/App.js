import React from 'react';
import {Text, View} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from '../src/router';
import store from './redux/store';
import {Loading} from './components';
import {Provider, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="bottom" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

export default App;
