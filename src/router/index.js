import React from 'react';
import {View, Text} from 'react-native';

import {
  SplashScreen,
  SignIn,
  SignUp,
  SignUpAddress,
  SignUpSuccess,
} from '../screens';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpSuccess"
        component={SignUpSuccess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
