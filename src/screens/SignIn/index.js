import React, {useState} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';
import {colors} from '../../res';
import {useForm} from '../../utils';
import {styles} from './styles.js';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form :=> ', form);
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
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            withLabel
            label="Password"
            placeholder="Input Your Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
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
