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
import {useForm, showToast} from '../../utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector, useDispatch} from 'react-redux';
import * as Constants from '../../config/Constant';
import * as Services from '../../config/Services';
import {setLoading, signUpAction} from '../../redux/action';

const SignUpAddress = ({navigation}) => {
  const {registerReducer, photoReducer} = useSelector(state => state);
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    address: '',
    city: 'Jakarta',
    houseNumber: '',
    phoneNumber: '',
  });

  const onSubmit = () => {
    const urlService = Constants.BASE_URL + Services.register;
    const dataRegister = {
      ...form,
      ...registerReducer,
    };

    dispatch(signUpAction(dataRegister, photoReducer, navigation));
  };

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <Header
          title="Address"
          subTitle="Make sure your data is valid"
          onPressIcBack={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView
          style={styles.container}
          extraHeight={150}
          enableOnAndroid>
          <TextInput
            withLabel
            label="Phone Number"
            placeholder="Input Your Phone Number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
            keyboardType="numeric"
          />
          <Gap height={16} />
          <TextInput
            withLabel
            label="Address"
            placeholder="Input Your Address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            withLabel
            label="House No."
            placeholder="Input Your House Number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          {Platform.OS === 'ios' ? <Gap height={45} /> : <Gap height={16} />}
          <Select
            label="Select City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
        </KeyboardAwareScrollView>
        <View style={styles.wrapperButtonSignUp}>
          <Button
            textButton="Sign Up, Now"
            color={colors.primary}
            onPress={onSubmit}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUpAddress;
