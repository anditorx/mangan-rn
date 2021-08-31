import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as ActionTypes from '../../redux/actionTypes.js';
import {Header, TextInput, Button, Gap} from '../../components';
import {colors} from '../../res';
import {useForm} from '../../utils';
import {styles} from './styles.js';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUp = ({navigation}) => {
  const globalState = useSelector(state => state.globalReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form :=> ', form);
    dispatch({type: ActionTypes.SET_REGISTER, value: form});
    navigation.navigate('SignUpAddress');
  };
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Header
          title="Sign Up"
          subTitle="Create your account"
          onPressIcBack={() => navigation.pop()}
        />
        <KeyboardAwareScrollView extraHeight={150} enableOnAndroid>
          <View style={styles.container} showsVerticalScrollIndicator={false}>
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
              value={form.name}
              onChangeText={value => setForm('name', value)}
            />
            <Gap height={16} />
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
              secureTextEntry
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
            <Gap height={24} />
            <Button
              textButton="Continue"
              // onPress={() => navigation.navigate('SignUpAddress')}
              onPress={onSubmit}
              color={colors.primary}
            />
            <Gap height={18} />
            <Button
              onPress={() => navigation.pop()}
              textButton="Already have an account? Sign In"
              noContainer
              color={colors.white}
            />
            <Gap height={24} />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
