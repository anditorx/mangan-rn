import React, {useState} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';
import {colors} from '../../res';
import {styles} from './styles.js';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(`email: ${email}, password: ${password}`);
  };

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
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Gap height={16} />
          <TextInput
            withLabel
            label="Password"
            placeholder="Input Your Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button
            textButton="Sign In"
            color={colors.primary}
            onPress={onSubmit}
          />
          <Gap height={24} />
          <Button
            onPress={() => navigation.navigate('SignUp')}
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
