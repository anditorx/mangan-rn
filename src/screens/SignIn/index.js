import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';
import {colors} from '../../res';
import {styles} from './styles.js';

const SignIn = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <Header title="Sign In" subTitle="Find your best ever meal" />
        <View style={styles.container}>
          <TextInput
            withLabel
            label="Email"
            placeholder="Input Your Email Address"
          />
          <Gap height={16} />
          <TextInput
            withLabel
            label="Password"
            placeholder="Input Your Password"
          />
          <Gap height={24} />
          <Button textButton="Sign In" color={colors.primary} />
          <Gap height={24} />
          <Button
            textButton="Create New Account"
            noContainer
            color={colors.white}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
