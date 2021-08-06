import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';
import {colors} from '../../res';
import {styles} from './styles.js';

const SignUp = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <Header
          title="Sign Up"
          subTitle="Create your account"
          onPressIcBack={() => navigation.pop()}
        />
        <View style={styles.container}>
          <View style={styles.wrapperPhoto}>
            <TouchableOpacity style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TextInput
            withLabel
            label="Full Name"
            placeholder="Input Your Full Name"
          />
          <Gap height={16} />
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
          <Button
            textButton="Continue"
            onPress={() => navigation.navigate('SignUpAddress')}
            color={colors.primary}
          />
          <Gap height={24} />
          <Button
            onPress={() => navigation.pop()}
            textButton="Already have an account? Sign In"
            noContainer
            color={colors.white}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
