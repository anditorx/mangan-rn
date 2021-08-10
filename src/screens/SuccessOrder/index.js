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
import {colors, IlSuccessOrder} from '../../res';
import {styles} from './styles.js';

const SuccessOrder = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <View style={styles.containerSuccess}>
          <IlSuccessOrder />
          <Gap height={30} />
          <Text style={styles.titleSuccessOrder}>You've Made Order</Text>
          <Gap height={6} />
          <Text style={styles.subTitleSuccessOrder}>
            Just stay at home while we are
          </Text>
          <Text style={styles.subTitleSuccessOrder}>preparing your foods!</Text>
          <View style={styles.containerButtonFindFoods}>
            <Button
              textButton="Order Other Foods"
              color={colors.primary}
              // onPress={() => navigation.replace('MainApp')}
            />
            <Gap height={12} />
            <Button
              textButton="View Your Order"
              color={colors.peace}
              fontColor={colors.white}
              // onPress={() => navigation.replace('MainApp')}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SuccessOrder;
