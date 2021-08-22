import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../Header';
import {TextInput, Button, Gap, Select} from '../../atoms';
import {colors, IlEmptyOrder} from '../../../res';
import {styles} from './styles.js';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <IlEmptyOrder />
          <Gap height={30} />
          <Text style={styles.title}>You've Made Order</Text>
          <Gap height={6} />
          <Text style={styles.subTitle}>Just stay at home while we are</Text>
          <Text style={styles.subTitle}>preparing your foods!</Text>
          <View style={styles.containerButtonFindFoods}>
            <Button
              textButton="Order Other Foods"
              color={colors.primary}
              onPress={() => navigation.replace('MainApp')}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default EmptyOrder;
