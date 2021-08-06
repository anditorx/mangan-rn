import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Header, TextInput, Button, Gap, Select} from '../../components';
import {colors} from '../../res';
import {styles} from './styles.js';

const SignUpAddress = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <Header
          title="Address"
          subTitle="Make sure your data is valid"
          onPressIcBack={() => navigation.pop()}
        />
        <View style={styles.container}>
          <TextInput
            withLabel
            label="Phone Number"
            placeholder="Input Your Phone Number"
          />
          <Gap height={16} />
          <TextInput
            withLabel
            label="Address"
            placeholder="Input Your Address"
          />
          <Gap height={16} />
          <TextInput
            withLabel
            label="House No."
            placeholder="Input Your House Number"
          />
          {Platform.OS === 'ios' ? <Gap height={45} /> : <Gap height={16} />}
          <Select label="Select City" />
          <Gap height={24} />
        </View>
        <View style={styles.wrapperButtonSignUp}>
          <Button textButton="Sign Up, Now" color={colors.primary} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUpAddress;
