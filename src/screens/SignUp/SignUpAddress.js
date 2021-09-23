import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import * as ActionTypes from '../../redux/actionTypes.js';
import {Header, TextInput, Button, Gap, Select} from '../../components';
import {colors} from '../../res';
import {styles} from './styles.js';
import {useForm, showToast} from '../../utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector, useDispatch} from 'react-redux';
import Axios from 'axios';
import * as Constants from '../../config/Constant';
import * as Services from '../../config/Services';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SignUpAddress = ({navigation}) => {
  const {registerReducer, photoReducer} = useSelector(state => state);
  console.log('photoReducer :=> ', photoReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    address: '',
    city: 'Jakarta',
    houseNumber: '',
    phoneNumber: '',
  });

  const onSubmit = () => {
    const urlService = Constants.BASE_URL + Services.register;
    console.log('urlService :=> ', urlService);
    const dataRegister = {
      ...form,
      ...registerReducer,
    };
    console.log('dataRegister :=> ', dataRegister);

    dispatch({type: ActionTypes.SET_LOADING, value: true});
    Axios.post(urlService, dataRegister)
      .then(res => {
        console.log('success register :=> ', res.data);

        if (photoReducer.isUploadPhoto) {
          const serviceAddAva =
            Constants.BASE_URL + Services.uploadPhotoProfile;
          console.log(serviceAddAva);
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          const options = {
            headers: {
              Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
              'Content-Type': 'multipart/form-data',
            },
          };

          Axios.post(serviceAddAva, photoForUpload, options)
            .then(resUpload => {
              console.log(resUpload);
            })
            .catch(errUpload => {
              console.log(errUpload);
              showToast('Ups!', errUpload?.response?.data?.message, 'danger');
            });
        }

        dispatch({type: ActionTypes.SET_LOADING, value: false});
        showToast('Register Success', 'Welcome to Mangan!', 'success');
        navigation.replace('SignUpSuccess');
      })
      .catch(error => {
        console.log('error register :=> ', error);
        dispatch({type: ActionTypes.SET_LOADING, value: false});
        showToast('Ups!', error?.response?.data?.message, 'danger');
      });
  };

  // const showToast = (message, description, type) => {
  //   showMessage({
  //     message,
  //     description,
  //     type,
  //   });
  // };

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <Header
          title="Address"
          subTitle="Make sure your data is valid"
          onPressIcBack={() => navigation.pop()}
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
