import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import * as ActionTypes from '../../redux/actionTypes.js';
import {Header, TextInput, Button, Gap} from '../../components';
import {colors} from '../../res';
import {useForm, showToast} from '../../utils';
import {styles} from './styles.js';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';

const SignUp = ({navigation}) => {
  const globalState = useSelector(state => state.globalReducer);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState('');
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onSubmit = () => {
    dispatch({type: ActionTypes.SET_REGISTER, value: form});
    navigation.navigate('SignUpAddress');
  };
  const addPhoto = () => {
    const options = {
      quality: 0.5,
      maxWidth: 250,
      maxHeight: 250,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel || response.error) {
        showToast('Ups!', 'User cancelled image picker or error', 'danger');
      } else {
        const source = {uri: response.assets[0].uri};
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        const dataImage = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        setPhoto(source);
        dispatch({type: ActionTypes.SET_PHOTO, value: dataImage});
        dispatch({type: ActionTypes.SET_UPLOAD_STATUS, value: true});
      }
    });
  };
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Header
          title="Sign Up"
          subTitle="Create your account"
          onPressIcBack={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView extraHeight={150} enableOnAndroid>
          <View style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperPhoto}>
              <TouchableOpacity style={styles.borderPhoto} onPress={addPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
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
