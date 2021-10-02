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
import {colors, IlSuccessSignUp} from '../../res';
import {styles} from './styles.js';

const SignUpSuccess = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <View style={styles.containerSuccess}>
          <IlSuccessSignUp />
          <Gap height={30} />
          <Text style={styles.titleSignUpSuccess}>Yeay! Completed</Text>
          <Gap height={6} />
          <Text style={styles.subTitleSignUpSuccess}>
            Now you are able to order
          </Text>
          <Text style={styles.subTitleSignUpSuccess}>
            some food as a self-reward
          </Text>
          <View style={styles.containerButtonFindFoods}>
            <Button
              textButton="Find Foods"
              color={colors.primary}
              onPress={() =>
                navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUpSuccess;
